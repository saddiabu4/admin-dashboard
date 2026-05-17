export const payments = Array.from({ length: 50 }, (_, index) => ({
  id: `${index + 1}`,

  customer: `Customer ${index + 1}`,

  amount: Math.floor(Math.random() * 5000),

  status: index % 2 === 0 ? 'Paid' : 'Pending',

  date: '2026-05-17',
}))
