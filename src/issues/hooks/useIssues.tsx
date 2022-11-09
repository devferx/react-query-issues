import { useQuery } from "@tanstack/react-query";

import { githubApi } from "../../api/githubApi";
import { Issue, State } from "../interfaces";
import { sleep } from "../../helpers/sleep";

interface useIssuesProps {
  state?: State;
  labels: string[];
}

const getIssues = async (labels: string[], state?: State): Promise<Issue[]> => {
  await sleep(2);
  const params = new URLSearchParams();

  if (state) params.append("state", state);

  const { data } = await githubApi.get<Issue[]>("/issues", { params });
  console.log(data);
  return data;
};

export const useIssues = ({ state, labels }: useIssuesProps) => {
  const issuesQuery = useQuery(["issues", { state, labels }], () =>
    getIssues(labels, state)
  );

  return { issuesQuery };
};
