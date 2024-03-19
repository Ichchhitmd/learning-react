import propsUtil from "./propsUtil";

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imgId: '1KnrANc'
                }}
            />
        </Card>
    );
}

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={propsUtil(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
