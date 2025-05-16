import { Sheet, Typography } from "@mui/joy";

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <Sheet
      key={index}
      sx={{
        width: "250px",
        padding: "1.5rem",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        margin: "1rem",
      }}
    >
      <Typography level="title-sm" fontSize={14} fontWeight={500}>
        {testimonial.name}
      </Typography>
      <Typography level="body1" fontSize={12} color="neutral" marginY={1}>
        {testimonial.text}
      </Typography>
      <Typography level="body2" fontSize={14} color="primary">
        {"⭐".repeat(testimonial.rating)}
      </Typography>
    </Sheet>
  );
};

export default TestimonialCard;
