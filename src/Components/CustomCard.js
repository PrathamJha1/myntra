import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CustomCarousal from "./CustomCarousal";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import "../App.css";
import Canvas from "./Canvas";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "./Context/AuthContext";
export default function CustomCard({ e, name }) {
  const [itemHovered, setItemHovered] = useState(false);
  const [similarHover, setSimilarHover] = useState(false);
  const [show, setShow] = useState(false);
  const { wishlist, setWishList } = useContext(UserContext);
  const nav = useNavigate();
  const handleClick = () => {
    nav("/product");
  };
  return (
    <Card
      className="card mt-3 cat "
      sx={{ width: "90%" }}
      onMouseOver={() => {
        setItemHovered(true);
      }}
      onMouseLeave={() => {
        setItemHovered(false);
      }}
      style={{ border: "none", boxShadow: "none" }}
    >
      {name === "similar" && (
        <CardMedia
          component="img"
          // height="140"
          image={e.link}
          alt={e.title}
          loading="lazy"
        />
      )}
      <CardContent
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: "4px",
        }}
      >
        {name !== "similar" && (
          <Link to={"/product/" + e.id} style={{ textDecoration: "none" }}>
            {" "}
            <CustomCarousal items={e} />{" "}
          </Link>
        )}
        {name !== "similar" && itemHovered && (
          <div style={{ width: "100%", height: "46px" }}></div>
        )}
        {name !== "similar" && !itemHovered && (
          <div style={{ marginTop: "5px" }}>
            <Typography
              gutterBottom
              // variant="h6"
              component="div"
              sx={{
                marginBottom: 0,
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {e.brand}
            </Typography>
            <div>
              <Typography variant="body2" color="text.secondary" size="small">
                {e.description}
              </Typography>
            </div>
          </div>
        )}

        {name === "similar" && (
          <div style={{ marginTop: "5px" }}>
            <Typography
              gutterBottom
              // variant="h6"
              component="div"
              sx={{
                marginBottom: 0,
                fontWeight: "bold",
                fontSize: "14px",
                textTransform: "uppercase",
              }}
            >
              {e.brand}
            </Typography>
            <div>
              <Typography variant="body2" color="text.secondary" size="small">
                {e.description}
              </Typography>
            </div>
          </div>
        )}

        <div
          className="btn btn-sm flex-row d-flex justify-content-start align-items"
          style={{
            marginTop: "-85px",
            marginLeft: "10px",
            position: "absolute",
            zIndex: "4",
            background: "hsla(0,0%,100%,.8)",
            color: "black",
            fontSize: "8px",
            display: !itemHovered && name === "similar" ? "flex" : "none",
          }}
          onMouseOver={() => {
            setSimilarHover(true);
          }}
          onMouseLeave={() => {
            setSimilarHover(false);
          }}
          onClick={() => {
            setShow(true);
          }}
        >
          {e.rating}⭐️
        </div>
        {itemHovered && name !== "similar" && (
          <div className="w-100 ">
            <button
              className="btn btn-sm similar flex-row d-flex justify-content-start align-items"
              style={{
                marginTop: "-90px",
                marginLeft: { similarHover } ? "10px" : "150px",
                position: "absolute",
                zIndex: "5",
                background: "hsla(0,0%,100%,.8)",
                color: "pink",
              }}
              onMouseOver={() => {
                setSimilarHover(true);
              }}
              onMouseLeave={() => {
                setSimilarHover(false);
              }}
              onClick={() => {
                setShow(true);
              }}
            >
              <ViewCarouselIcon />
              {similarHover ? "View Similar " : ""}
            </button>
            {name !== "similar" && (
              <div
                style={{
                  marginTop: "-55px",
                  position: "absolute",
                  zIndex: "5",
                  background: "white",
                }}
              >
                <div className="d-flex flex-column  justify-content-center w-100 ">
                  <button
                    style={{
                      border: "1px solid grey",
                      background: "white",
                      fontSize: "12px",
                      fontWeight: "800",
                      width: "200px",
                      padding: "2%",
                    }}
                    onClick={() => {
                      setWishList(
                        wishlist.filter((ele) => {
                          console.log(ele);
                          return (ele[1] !== e.description || ele[0] != e.link);
                        })
                      );
                      setWishList((current) => [
                        ...current,
                        [e.link, e.description],
                      ]);
                    }}
                  >
                    <FavoriteBorderOutlined
                      sx={{ width: "20px", height: "20px" }}
                    />
                    WISHLIST
                  </button>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: "500" }}
                    color="text.primary"
                    gutterBottom
                  >
                    Sizes:
                    <span>M</span>
                  </Typography>
                </div>
              </div>
            )}
            {name !== "similar" && (
              <Canvas
                name="SideBar"
                show={show}
                setShow={setShow}
                property="similar"
              />
            )}
          </div>
        )}
        <Link to={"/product/" + e.id} style={{ textDecoration: "none" }}>
          <div style={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: 14, fontWeight: "500", zIndex: 5 }}
              color="text.primary"
              gutterBottom
            >
              <span style={{ fontWeight: "800" }}>Rs. {e.price}</span>
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                //   fontWeight: "bold",
                textDecoration: "line-through",
                marginLeft: 0.5,
                marginTop: 0.5,
                zIndex: 5,
              }}
              color="text.secondary"
              gutterBottom
            >
              Rs.
              {e.strikedOff}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: "light",
                marginLeft: 0.5,
                color: "orange",
                zIndex: 5,
              }}
              color="text.secondary"
              gutterBottom
            >
              ({e.discount}% OFF)
            </Typography>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
}
