import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

const FormInsideProducerComponent = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    telefone: "",
    email: "",
    dap: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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
          Formulário de cadastro de produtor
        </Typography>

        <TextField
          id="nome"
          name="nome"
          label="Nome"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
          value={formData.nome}
          onChange={handleInputChange}
        />
        <TextField
          id="cpf"
          name="cpf"
          label="CPF"
          variant="outlined"
          sx={{
            m: 1,
            width: 200,
          }}
          value={formData.cpf}
          onChange={handleInputChange}
        />
        <TextField
          id="telefone"
          name="telefone"
          label="Telefone"
          variant="outlined"
          sx={{
            m: 1,
            width: 200,
          }}
          value={formData.telefone}
          onChange={handleInputChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
          value={formData.email}
          onChange={handleInputChange}
        />
        <TextField
          id="dap"
          name="dap"
          label="Declaração de Aptidão ao Pronaf (DAP)"
          variant="outlined"
          sx={{
            m: 1,
            width: 420,
          }}
          value={formData.dap}
          onChange={handleInputChange}
        />
      </Box>
    </Grid>
  );
};

export default FormInsideProducerComponent;
