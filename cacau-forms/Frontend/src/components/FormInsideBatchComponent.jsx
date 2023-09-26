import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
// import { MenuItem } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// const cocoaCategory = [
//   { value: "1", label: "Commodity/Bulk" },
//   { value: "2", label: "Varietal" },
//   { value: "3", label: "Fino" },
//   { value: "4", label: "Orgânico" },
//   { value: "5", label: "Qualidade" },
// ];

// const storageLocation = [
//   { value: "1", label: "Armazém" },
//   { value: "2", label: "Barcaça" },
//   { value: "3", label: "Depósito" },
//   { value: "4", label: "Secador" },
//   { value: "5", label: "Casa" },
// ];

const FormInsideBatchComponent = () => {
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
          Formulário de cadastro de lote
        </Typography>
        <Typography variant="h6" color="initial">
          1. Tipo de Cacau Produzido e Fermentação
        </Typography>
        <span>
          <b>Como Comercializa seu produto</b>
        </span>
        {/* <div>
          <TextField
            id="outlined-select-currency"
            select
            required
            sx={{
              m: 1,
              width: 240,
            }}
          >
            {cocoaCategory.map((category) => (
              <MenuItem key={category.value} value={category.value}>
                {category.label}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Commodity/Bulk" />
          <FormControlLabel control={<Checkbox />} label="Varietal" />
          <FormControlLabel control={<Checkbox />} label="Fino" />
          <FormControlLabel control={<Checkbox />} label="Orgânico" />
          <FormControlLabel control={<Checkbox />} label="Qualidade" />
        </FormGroup>

        <span>
          <b>Fermenta Cacau?</b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <TextField
          id="outlined-basic"
          label="Dias"
          variant="outlined"
          sx={{
            m: 1,
            width: 70,
          }}
        />
        <Typography variant="h6" color="initial">
          2. Método para Secagem e Destinação de Resíduos
        </Typography>
        <span>
          <b>Método para secagem</b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Estufa" />
          <FormControlLabel control={<Checkbox />} label="Lenha" />
          <FormControlLabel control={<Checkbox />} label="Sol" />
        </FormGroup>
        <span>
          <b>
            Os resíduos são destinados adequadamente sempre que possível,
            promovendo reciclagem e compostagem e evitando a queima?
          </b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            O(a) produtor(a) dispõe de lugar apropriado para a tríplice lavagem
            das embalagens vazias de agrotóxicos?
          </b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            O(a) produtor(a) possui local adequado para manuseio de agrotóxicos
            e misturas de caldas para aplicação?
          </b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            O(a) produtor(a) não utiliza embalagens de agrotóxicos para qualquer
            outra finalidade
          </b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <Typography variant="h6" color="initial">
          3. Uso Responsável de Insumos Agrícolas e Armazenamento
        </Typography>
        <span>
          <b>
            Não são utilizados insumos agrícolas próximos de corpos de cursos
            d’água, sejam permanentes ou intermitentes
          </b>
        </span>
        <FormGroup required>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>

        <span>
          <b>Local de armazenamento</b>
        </span>
        {/* <div>
          <TextField
            id="outlined-select-currency"
            select
            required
            sx={{
              m: 1,
              width: 240,
            }}
          >
            {storageLocation.map((storage) => (
              <MenuItem key={storage.value} value={storage.value}>
                {storage.label}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Armazém" />
          <FormControlLabel control={<Checkbox />} label="Barcaça" />
          <FormControlLabel control={<Checkbox />} label="Depósito" />
          <FormControlLabel control={<Checkbox />} label="Secador" />
          <FormControlLabel control={<Checkbox />} label="Casa" />
        </FormGroup>

        <span>
          <b>Tempo de estoque</b>
        </span>
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            m: 1,
            width: 240,
          }}
        />
      </Box>
    </Grid>
  );
};

export default FormInsideBatchComponent;
