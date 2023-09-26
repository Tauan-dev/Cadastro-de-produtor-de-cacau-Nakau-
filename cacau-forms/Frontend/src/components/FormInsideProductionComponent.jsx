import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function FormInsideProductionComponent() {
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
          Formulário de cadastro de produção
        </Typography>
        <Typography variant="h6" color="initial">
          1. Produção Anual e Sistema de Produção
        </Typography>
        <span>
          <b>Produção Anual (por ano)</b>
        </span>
        <TextField
          id="outlined-basic"
          label="Ano"
          variant="outlined"
          sx={{
            m: 1,
            width: 100,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Quilo"
          variant="outlined"
          sx={{
            m: 1,
            width: 100,
          }}
        />
        <span>
          <b>Sistema de Produção de Cacau</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Cacau Nativo" />
          <FormControlLabel control={<Checkbox />} label="Irrigado" />
          <FormControlLabel control={<Checkbox />} label="SAF" />
          <FormControlLabel control={<Checkbox />} label="Pleno Sol" />
        </FormGroup>

        <span>
          <b>Quais Variedades São Cultivadas?</b>
        </span>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={7}
          sx={{
            m: 1,
            width: 420,
          }}
        />
        <Typography variant="h6" color="initial">
          2. Composição da Equipe de Trabalho e Educação na Propriedade
        </Typography>
        <span>
          <b>Quantidade de Pessoas Ocupadas na Propriedade</b>
        </span>
        <TextField
          id="outlined-basic"
          label="Familiar"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Assalariado"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Parceiros/Meeiros"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <span>
          <b>
            Crianças Que Vivem na Propriedade e que Estão na Idade
            Escolar,Frequentam a Escola?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
          <FormControlLabel
            control={<Checkbox />}
            label="Não há crianças na propriedade"
          />
        </FormGroup>
        <Typography variant="h6" color="initial">
          3. Sistema Administrativo e Perfil da Mão-de-Obra
        </Typography>
        <span>
          <b>Sistema Administrativo</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Familiar" />
          <FormControlLabel control={<Checkbox />} label="Patronal" />
          <FormControlLabel control={<Checkbox />} label="Misto" />
        </FormGroup>
        <span>
          <b>Perfil da Mão-de-Obra:</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Familiar" />
          <FormControlLabel
            control={<Checkbox />}
            label="Assalariado/Empregado"
          />
        </FormGroup>
        <span>
          <b>Funcionários</b>
        </span>
        <TextField
          id="outlined-basic"
          label="Fixos"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Safristas"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Residentes"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <span>
          <b>
            O(a) Produtor(a) Remunera os Trabalhadores de Acordo com a
            Legislação Vigente?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            Os Trabalhadores Usufruem de Direitos e Benefícios na Maternidade de
            Acordo com a Legislação?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            Os Trabalhadores São Livres Para Participar de Organizações e da
            Negociação Coletiva?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <span>
          <b>
            Os Trabalhadores Não Sofrem Discriminação (Ex: Gênero, Raça, Classe
            Social, Cor, Orientação Sexual, Deficiência etc.)?
          </b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <Typography variant="h6" color="initial">
          4. Assistência Técnica e Comercialização
        </Typography>
        <span>
          <b>Possui Assistência Técnica</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <TextField
          id="outlined-basic"
          label="Qual ?"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <span>
          <b>É Associado a Alguma Entidade</b>
        </span>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Sim" />
          <FormControlLabel control={<Checkbox />} label="Não" />
        </FormGroup>
        <TextField
          id="outlined-basic"
          label="Qual ?"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
        <span>
          <b>Como vende o Cacau?</b>
        </span>
        {/* <div>
          <TextField
            id="outlined-select-currency"
            select
            sx={{
              m: 1,
              width: 240,
            }}
          >
            {cocoaSale.map((sale) => (
              <MenuItem key={sale.value} value={sale.value}>
                {sale.label}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label="Intermediário/Cidade"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Intermediário/Fazenda"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Vende diretamente com o consumidor"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Vende para empreendimento local"
          />
          <FormControlLabel control={<Checkbox />} label="Cooperativa" />
          <FormControlLabel control={<Checkbox />} label="Indústria" />
          <FormControlLabel
            control={<Checkbox />}
            label="Venda direta de Nibs"
          />
        </FormGroup>

        <span>
          <b>Como Comercializa seu produto</b>
        </span>
        {/* <div>
          <TextField
            id="outlined-select-currency"
            select
            sx={{
              m: 1,
              width: 240,
            }}
          >
            {cocoaTypes.map((type) => (
              <MenuItem key={type.value} value={type.value}>
                {type.label}
              </MenuItem>
            ))}
          </TextField>
        </div> */}
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Amêndoa" />
          <FormControlLabel control={<Checkbox />} label="Nibs" />
          <FormControlLabel control={<Checkbox />} label="Cacauada" />
          <FormControlLabel control={<Checkbox />} label="Chocolate" />
          <FormControlLabel control={<Checkbox />} label="Licor" />
          <FormControlLabel control={<Checkbox />} label="Manteiga" />
        </FormGroup>

        <span>
          <b>Valor Médio do Quilo Comercializado</b>
        </span>
        <TextField
          id="outlined-basic"
          label="Valor"
          variant="outlined"
          sx={{
            m: 1,
            width: 250,
          }}
        />
      </Box>
    </Grid>
  );
}

export default FormInsideProductionComponent;
