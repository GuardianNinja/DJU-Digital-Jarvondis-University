// sdk/client.ts (add)
async getSafetyQueue() {
  const query = /* GraphQL */ `
    query SafetyQueue {
      missions(where: { status: UNDER_REVIEW }) {
        id
        title
        status
        startDate
        domain { id name }
        risks { severity }
        declarations { id type }
      }
    }
  `;
  const res = await this.client.request<{ missions: any[] }>(query);
  return res.missions;
}
