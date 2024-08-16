function Card(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img src={props.image} alt={props.title} className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-brand">{props.title}</div>
                <p className="text-gray-700">{props.description}</p>
            </div>
        </div>
    );
}

export default Card;