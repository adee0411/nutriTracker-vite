import {
  Typography,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  RadioGroup,
  Radio,
} from "@mui/joy";
import { CiSettings } from "react-icons/ci";
import { Form } from "react-router";

import SettingsBg from "../../assets/images/settings_bg.svg";

const Settings = () => {
  return (
    <Box p={2} height="100%">
      <Stack
        component="header"
        direction="row"
        alignItems="center"
        mb={4}
        gap={2}
      >
        <CiSettings fontSize={26} />
        <Typography level="h1" fontSize={26} fontWeight={700}>
          Beállítások
        </Typography>
      </Stack>
      <Form style={{ width: "30%", minWidth: "600px", marginInline: "auto" }}>
        <Stack gap={2}>
          <FormControl>
            <FormLabel>E-mail cím</FormLabel>
            <Input type="email" disabled value="nutri@tracker.com"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Jelszó</FormLabel>
            <Input type="password" value="012345"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Születési dátum</FormLabel>
            <Input type="date"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Magasság</FormLabel>
            <Input type="number" endDecorator="cm"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Napi kalória</FormLabel>
            <Input type="number" endDecorator="kcal"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Napi lépésszám</FormLabel>
            <Input type="number" endDecorator="lépés"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Testsúly cél</FormLabel>
            <Input type="number" endDecorator="kg"></Input>
          </FormControl>
          <FormControl>
            <FormLabel>Makronutriens preferencia</FormLabel>
            <RadioGroup orientation="horizontal">
              <Radio label="Magas szénhidrát" value="highCarb" checked />
              <Radio label="Kiegyensúlyozott" value="balanced" />
              <Radio label="Alacsony szénhidrát" value="lowCarb" />
            </RadioGroup>
          </FormControl>

          <Button fullWidth>Módosít</Button>
        </Stack>
      </Form>
    </Box>
  );
};

export default Settings;
