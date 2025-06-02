import {
  Card,
  CardOverflow,
  CardContent,
  Stack,
  Typography,
  Divider,
  Link,
  AspectRatio,
} from "@mui/joy";

import { IoIosBicycle } from "react-icons/io";
import { CiClock1 } from "react-icons/ci";
import { GiPathDistance } from "react-icons/gi";

import PlaceholderImg from "../../../../assets/images/cycling_placeholder.jfif";

const LastActivity = () => {
  return (
    <Card variant="outlined" sx={{ "&:hover img": { scale: 1.2 } }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography level="title-sm">Utolsó aktivitás</Typography>
        <Link color="neutral" level="body-sm">
          Összes
        </Link>
      </Stack>
      <CardOverflow>
        <AspectRatio ratio="2" sx={{ borderRadius: 0 }}>
          <img
            src={PlaceholderImg}
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{ transition: "all .3s ease" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack direction="row" alignItems="center" gap={1}>
          <IoIosBicycle />
          <Typography level="title-md">Bicikli</Typography>
        </Stack>
        <Typography level="body-sm">Budapest</Typography>
        <Typography level="body-sm" fontSize={12}>
          2025.05.30.
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Stack direction="row" alignItems="center" gap={1} flex={1}>
            <CiClock1 />
            <Typography
              level="body-xs"
              textColor="text.secondary"
              sx={{ fontWeight: "md" }}
            >
              Idő: 1:02:13
            </Typography>
          </Stack>

          <Divider orientation="vertical" />
          <Stack direction="row" alignItems="center" gap={1} flex={1}>
            <GiPathDistance />
            <Typography
              level="body-xs"
              textColor="text.secondary"
              sx={{ fontWeight: "md" }}
              flex={1}
            >
              Táv: 19.83 km
            </Typography>
          </Stack>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default LastActivity;
