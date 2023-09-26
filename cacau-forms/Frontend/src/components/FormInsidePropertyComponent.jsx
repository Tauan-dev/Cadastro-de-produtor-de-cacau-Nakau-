import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function FormInsidePropertyComponent() {
  return (
    <Grid
      container
      spacing={2}
      xs={10}
      sx={{
        bgcolor: "#f5f5f5",
        padding: "30px",
        border: "1px solid #000",
        borderRadius: "5px",
        height: "900px",
      }}
    >
      <Box
        component="form"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"flex-start"}
      >
        <Typography variant="h5" color="initial">
          Formulário de cadastro de propriedade
        </Typography>
        <Typography variant="h6" color="initial">
          1. Propriedade
        </Typography>
        <TextField
          id="outlined-basic"
          label="Nome da propriedade rural"
          variant="outlined"
          sx={{
            m: 1,
            width: 640,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Município"
          variant="outlined"
          sx={{
            m: 1,
            width: 310,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Estado"
          variant="outlined"
          sx={{
            m: 1,
            width: 310,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Latitude"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Longitude"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <Typography variant="h6" color="initial">
          2. Área e Cultivos
        </Typography>
        <TextField
          id="outlined-basic"
          label="Área total (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Área preservada (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Área total cultivo de cacau (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Área recuperada (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Área de outros cultivos e vegetação (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Área de agricultura de baixo carbono (ha)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <Typography variant="h6" color="initial">
          3. Condições na Propriedade
        </Typography>
        <span>
          <b>
            A propriedade dispoe de condições adequadas de moradia para os
            trabalhadores residentes na propriedade?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            Tem água potável disponível aos trabalhadores armazenada em local
            limpo, livre de contaminação e de fácil acesso? Inclusive nas
            frentes de trabalho?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>Tem acesso a Internet ?</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>Tem acesso a telefonia móvel ?</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <Typography variant="h6" color="initial">
          4. Conservação Ambiental
        </Typography>
        <span>
          <b>
            Na propriedade não há desmatamento ou degradação de floresta
            primária e/ou floresta secundário desde 2008?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>O(a) produtor(a) utiliza lenha ilegal?</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            O(a) produtor(a) identifica as áreas degradadas da propriedade e
            executa plano de ação para recuperação?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            O(a) produtor(a) protege e preserva áreas de preservação permanente
            (APP) e reserva legal (RL), obedecendo critérios da legislação
            vigente?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>Possui CAR (Cadastro Ambiental Rural)</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
      </Box>
    </Grid>
  );
}
