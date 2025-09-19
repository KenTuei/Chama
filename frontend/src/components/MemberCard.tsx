interface MemberCardProps {
  name: string;
  email: string;
}

export default function MemberCard({ name, email }: MemberCardProps) {
  return (
    <div className="border p-4 rounded-lg shadow mb-2">
      <h2 className="font-bold">{name}</h2>
      <p>{email}</p>
    </div>
  );
}
