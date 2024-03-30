const Link = ({ routeData }) => {
    // const {path, name} = routeData
    return (
        <div>
            <li className="py-2 text-xl hover:bg-green-100 duration-200">
                <a href={routeData.path}>{routeData.name}</a>
            </li>
        </div>
    );
};

export default Link;