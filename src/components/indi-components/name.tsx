interface NameProps {
    name: string;
}

const Name = ({ name }: NameProps) => {
    return (
        <div className="name">
            <h1>{name}</h1>
        </div>
    );
}

export default Name;