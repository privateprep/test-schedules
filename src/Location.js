import React, { useEffect, useState } from "react";
import { Menu } from "./App";
import { findLocationBySlug, fetchLocationTests } from "./lib";

const Location = ({
  match: {
    params: { slug },
  },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [testTypes, setTestTypes] = useState([]);
  const [practiceTests, setPracticeTests] = useState([]);
  const [activeTestType, setActiveTestType] = useState(null);
  const [activeTests, setActiveTests] = useState([]);
  const location = findLocationBySlug(slug);

  useEffect(() => {
    if (!!location) {
      setIsLoading(true);
      fetchLocationTests(location)
        .then(({ test_types, practice_tests }) => {
          setTestTypes(test_types);
          setPracticeTests(
            practice_tests.sort((a, b) => {
              a = new Date(a.startsAt);
              b = new Date(b.startsAt);
              return a > b ? -1 : a < b ? 1 : 0;
            })
          );
        })
        .finally(() => setIsLoading(false));
    }
  }, [location]);

  useEffect(() => {
    const filteredTests = !activeTestType
      ? practiceTests
      : practiceTests.filter(test => test.test_type === activeTestType);

    setActiveTests(filteredTests);
  }, [activeTestType, practiceTests]);

  if (!location) {
    return <div>We can't find a matching location</div>;
  }

  return (
    <React.Fragment>
      <div className="Location">
        <header className="Location__header">
          <h1 className="title">{location.name} Test Schedule</h1>
        </header>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !!testTypes.length && (
          <React.Fragment>
            <div class="filters">
              <h2>Test Types</h2>
              <div className="radio-group">
                <div className="radio" onClick={_ => setActiveTestType(null)}>
                  <label className="radio-label">
                    <input
                      type="radio"
                      value={null}
                      checked={!activeTestType}
                    />
                    <span className="option-label">All</span>
                  </label>
                </div>
                {testTypes.map(testType => (
                  <div
                    className="radio"
                    key={testType.test_type_id}
                    onClick={_ => setActiveTestType(testType.test_type)}
                  >
                    <label className="radio-label">
                      <input
                        type="radio"
                        value={testType.test_type}
                        checked={activeTestType === testType.test_type}
                      />
                      <span className="option-label">{testType.test_type}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
        {!isLoading && !!activeTests.length && (
          <div class="test-container">
            <header class="test-container__header">
              <h2>Available Tests</h2>
              <p class="label">{activeTests.length}</p>
            </header>
            <table>
              <thead>
                <tr>
                  <th className="testType">Test Type</th>
                  <th className="testCenter">Test Center</th>
                  <th className="startsAt">Start Time</th>
                  <th className="accommodations">Accommodations</th>
                </tr>
              </thead>
              <tbody>
                {activeTests.map(test => {
                  const localDate = new Date(test.starts_at);
                  return (
                    <tr key={`${test.id}-${test.test_type}`}>
                      <td className="testType">{test.test_type}</td>
                      <td className="testCenter">{test.test_center}</td>
                      <td className="startsAt">
                        {localDate.toLocaleString("default", {
                          timeZoneName: "short",
                        })}
                      </td>
                      <td className="accommodations">
                        {test.accommodations.map(accom => (
                          <p>{accom.name}</p>
                        ))}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Location;
