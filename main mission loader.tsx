import { useQuery, gql } from "@apollo/client";

const MISSION_QUERY = gql`
  query MissionPage($id: ID!) {
    missions(where: { id: $id }) {
      id
      title
      description
      status
      riskLevel
      startDate
      endDate

      domain { id name }

      lead { id name roles }
      participants { id name roles }
      mentors { id name roles }

      artifacts { id title type version createdAt }

      concepts { id label description }

      risks {
        id
        category
        severity
        likelihood
        description
        mitigations {
          id
          description
          status
          owner { id name }
        }
      }

      charterClauses {
        id
        article
        section
        text
        bindingLevel
      }

      declarations {
        id
        type
        text
        createdAt
        signers { id name }
      }

      decisions {
        id
        type
        outcome
        date
        notes
        steward { id name }
        clauses { id article section }
      }
    }
  }
`;

export function useMission(id: string) {
  const { data, loading, error, refetch } = useQuery(MISSION_QUERY, {
    variables: { id }
  });

  return {
    mission: data?.missions?.[0] ?? null,
    loading,
    error,
    refetch
  };
}
