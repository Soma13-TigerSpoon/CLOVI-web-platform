import { NavLink, useSearchParams } from "react-router-dom";

function CategoryLink({ categoryId, to, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("categoryId").includes(categoryId.toString());
    console.log(isActive);
    return <NavLink className={isActive ? 'selected' : ''} to={to} {...props} />;
}

export default CategoryLink;