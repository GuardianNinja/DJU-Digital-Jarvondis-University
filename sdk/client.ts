// sdk/client.ts (add)
async getMissionsByLead(leadId: string) {
  const query = /* GraphQL */ `
    query MissionsByLead($leadId: ID!) {
      missions(where: { lead: { id: $leadId } }) {
        id
        title
        status
        startDate
        domain { id name }
        risks { severity }
      }
    }
  `;
  const res = await this.client.request<{ missions: any[] }>(query, { leadId });
  return res.missions;
}
