import React from "react";
import "./Features.css";
import { Typography } from "@mui/joy";
import { Stack, Card, CardContent, Grid } from "@mui/joy";
import ChartIcon from "../../assets/icons/undraw_pie-chart_eo9h.svg";
import AnimatedFoodIcon from "../../assets/icons/fasting-meal.gif";
import AnimatedChartIcon from "../../assets/icons/graphic.gif";
import AnimatedTargetIcon from "../../assets/icons/target.gif";
import AnimatedHintIcon from "../../assets/icons/hint.gif";

const FEATURES = [
  {
    icon: AnimatedFoodIcon,
    title: "Log Your Meals",
    description:
      "Easily record your daily food intake and track calories, macros, and nutrients.",
  },
  {
    icon: AnimatedChartIcon,
    title: "Track Your Progress",
    description:
      "Visualize your nutrition trends and monitor your progress over time.",
  },
  {
    icon: AnimatedTargetIcon,
    title: "Set Goals",
    description:
      "Set personalized nutrition goals and stay motivated to achieve them.",
  },
  {
    icon: AnimatedHintIcon,
    title: "Get hints",
    description:
      "Set personalized nutrition goals and stay motivated to achieve them.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <article className="content">
        <div className="text">
          <Typography
            level="h3"
            fontSize={40}
            fontWeight={400}
            textAlign={"center"}
          >
            Explore what{" "}
            <Typography color="primary" fontWeight={600}>
              NutriTracker
            </Typography>{" "}
            can help you
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ marginTop: 4 }}
            columns={2}
            maxWidth={1000}
            margin="0 auto"
          >
            {FEATURES.map((feature, idx) => (
              <Grid xs={2} sm={1} md={1} key={idx}>
                <Card
                  key={idx}
                  variant="plain"
                  sx={{
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    position: "relative",
                    top: "0px",
                    transition: "all 0.3s ease",
                    "&:hover": { top: "-4px" },
                  }}
                >
                  <CardContent sx={{ display: "flex", gap: 2 }}>
                    <div className="icon" style={{ width: "30%" }}>
                      <img src={feature.icon} alt={feature.title} />
                    </div>
                    <div>
                      <Typography
                        level="h5"
                        fontWeight={600}
                        fontSize={20}
                        mb={1}
                      >
                        {feature.title}
                      </Typography>
                      <Typography level="body2" color="neutral">
                        {feature.description}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </article>
    </section>
  );
};

export default Features;
