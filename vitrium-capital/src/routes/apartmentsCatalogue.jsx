import { NavLink, Outlet } from "react-router-dom";
import { getApartments } from "../data";

export default function ApartmentsCatalogue() {
    let apartments = getApartments();
    return (
			<div style={{ display: "flex" }}>
        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem",
          }}
        >
          {apartments.map((apartment) => (
            <NavLink
              style={({ isActive }) => {
								return {
									display: "block",
									margin: "1rem 0",
									color: isActive ? "red" : "",
								};
							}}
              to={`/apartments/${apartment.id}`}
              key={apartment.id}
            >
              {apartment.name}
            </NavLink>
          ))}
        </nav>
				<Outlet />
      </div>
    );
  }
