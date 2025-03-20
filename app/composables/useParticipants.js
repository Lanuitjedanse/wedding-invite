export const useParticipants = () => {
  const participants = useState("participants", () => []);

  return { participants };
};
