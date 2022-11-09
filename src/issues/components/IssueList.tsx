import { IssueItem } from "./IssueItem";
import { Issue, State } from "../interfaces";

interface IssueListProps {
  issues: Issue[];
  state?: State;
  onStateChanged: (newState?: State) => void;
}

export const IssueList = ({
  issues,
  state,
  onStateChanged,
}: IssueListProps) => {
  return (
    <div className="card border-white">
      <div className="card-header bg-dark">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <a
              className={`nav-link ${!state ? "active" : ""}`}
              onClick={() => onStateChanged()}
            >
              All
            </a>
          </li>
          {Object.values(State).map((stateValue) => (
            <li className="nav-item" key={stateValue}>
              <a
                className={`nav-link ${state === stateValue ? "active" : ""}`}
                onClick={() => onStateChanged(stateValue)}
              >
                {stateValue.charAt(0).toUpperCase() + stateValue.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="card-body text-dark">
        {issues.map((issue) => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
    </div>
  );
};
