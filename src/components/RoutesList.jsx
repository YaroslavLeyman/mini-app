import React from "react";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectRoute, fetchRouteStart } from "../redux/reducers/routeSlice";

const RouteList = () => {
  const routes = useSelector((state) => state.route.routes);
  const selectedRoute = useSelector((state) => state.route.selectedRoute);
  const dispatch = useDispatch();

  const handleRouteSelect = (route) => {
    dispatch(selectRoute(route));
    dispatch(fetchRouteStart());
  };

  return (
    <List
      style={{ border: "1px solid black", borderRadius: "4px" }}
      dataSource={routes}
      renderItem={(route) => (
        <List.Item
          onClick={() => handleRouteSelect(route)}
          style={{
            cursor: "pointer",
            background: route === selectedRoute ? "#e6f7ff" : "transparent",
            borderRadius: "4px",
            padding: "8px",
          }}
        >
          {route.name}
        </List.Item>
      )}
    />
  );
};

export default RouteList;
