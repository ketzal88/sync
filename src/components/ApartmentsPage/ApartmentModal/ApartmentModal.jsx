import React, {useState} from 'react'
import { Dialog, Grid, IconButton, Typography, Box, Divider, Checkbox, FormControlLabel, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { dormitoriosText, formatSuperficie, pisoText } from '../../../utils/apartmentsUtils'
import CustomTextField from '../../CustomTextField/CustomTextField'
import { useTheme } from '@mui/styles';

const ScheduleInterviewModal = ({open = false, handleClose = () => {}, apartment = {}}) => {
    const theme = useTheme()
    const [formValues, setFormValues] = useState({
      name: '',
      lastName: '',
      email: '',
      country: '',
      telephone: '',
      areaCode: '',
      consulta: '',
      tyc: false
    })
  
    const handleFormFieldsChange = ({target}, field) => {
      let value = target.value
      if (field === 'tyc') {
        value = target.checked
      }
      setFormValues({
        ...formValues,
        [field]: value
      })
    }
  
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: '#132127',
            padding: '43px',
            borderRadius: '0px',
            width: 1530,
            height: 1140,
          }
        }}
      >
        <Grid container>
          <Grid container item sx={{width: '100%', justifyContent: 'flex-start'}}>
            <IconButton aria-label="close-modal" sx={{color: 'white'}} onClick={handleClose}>
              <CloseIcon sx={{fontSize: 52}} />
            </IconButton>
          </Grid>
          <Grid container item sx={{width: '100%', alignItems: 'center', flexDirection: 'column', p: 0, marginBottom: '50px'}}>
            <Box>
              <Typography sx={{fontSize: '78px', color: 'white', fontWeight: '900', lineHeight: '86px', fontStyle: 'normal'}}>{apartment.id}</Typography>
            </Box>
            <Box>
              <Typography sx={{fontSize: '32px', color: 'white', lineHeight: '43px', fontWeight: '600'}}>{formatSuperficie(apartment.superficie)} M<sup>2</sup></Typography>
            </Box>
            <Divider sx={{border: '4px solid #F1804F', width: '17%', marginBottom: '31px', marginTop: '20px'}} />
            <Box>
              <Typography sx={{fontSize: '28px', color: 'white', fontWeight: '600'}}>
                {apartment.piso}{pisoText(apartment.piso)} piso | {apartment.dormitorios} {dormitoriosText(apartment.dormitorios)}
              </Typography>
            </Box>
            <Box sx={{marginTop: '36px', display: 'flex', flexDirection: 'row'}}>
              <Box
                sx={{
                  height: 49,
                  width: 49,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  marginRight: '20px'
                }}
              />
              <Box
                sx={{
                  height: 49,
                  width: 49,
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  marginRight: '20px'
                }}
              />
              <Box
                sx={{
                  height: 49,
                  width: 49,
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}
              />
            </Box>
          </Grid>
          <Grid container item sx={{width: '100%', flexDirection: 'row', p: 0, marginBottom: '25px'}}>
            <Grid container item sx={{width: '33.33%'}}>
              <Box sx={{width: 477, height: 365}}>
                <img src={apartment.img1} alt={`apartment-${apartment.id}`} height="100%" width="100%" />
              </Box>
            </Grid>
            <Grid container item sx={{width: '33.33%', pl: '30px', pr: '40px'}}>
              <Box>
                <CustomTextField
                  isRequired
                  label="Nombre"
                  value={formValues.name}
                  onChange={(e) => handleFormFieldsChange(e, 'name')}
                  isFullWidth
                  inputHeight='47px'
                  fontSize='20px'
                  containerStyles={{
                    marginBottom: '40px'
                  }}
                />
                <CustomTextField
                  isRequired
                  label="Email"
                  value={formValues.email}
                  onChange={(e) => handleFormFieldsChange(e, 'email')}
                  isFullWidth
                  inputHeight='47px'
                  fontSize='20px'
                  containerStyles={{
                    marginBottom: '40px'
                  }}
                />
                <CustomTextField
                  isRequired
                  label="Selecciona un país"
                  value={formValues.country}
                  onChange={(e) => handleFormFieldsChange(e, 'country')}
                  isFullWidth
                  inputHeight='47px'
                  fontSize='20px'
                  containerStyles={{
                    marginBottom: '100px'
                  }}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formValues.tyc}
                      onChange={(e) => handleFormFieldsChange(e, 'tyc')}
                      icon={<RadioButtonUncheckedIcon />}
                      checkedIcon={<CheckCircleIcon />}
                      sx={{
                        color: theme.palette.primary.syncOrange,
                        '&.Mui-checked': {
                          color: theme.palette.primary.syncOrange,
                        },
                      }}
                    />
                  }
                  label="Acepto los términos y condiciones"
                  labelPlacement="end"
                  sx={{
                    color: 'white',
                    pl: '12px'
                  }}
                />
              </Box>
            </Grid>
            <Grid container item sx={{width: '33.33%', pl: '30px', pr: '40px'}}>
              <Box sx={{width: '100%'}}>
                <CustomTextField
                  isRequired
                  label="Apellido"
                  value={formValues.lastName}
                  onChange={(e) => handleFormFieldsChange(e, 'lastName')}
                  isFullWidth
                  inputHeight='47px'
                  fontSize='20px'
                  containerStyles={{
                    marginBottom: '40px'
                  }}
                />
                <Box sx={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                  <Box sx={{width: '30%', marginRight: '39px',}}>
                    <CustomTextField
                      isRequired
                      label="Cod. área"
                      value={formValues.areaCode}
                      onChange={(e) => handleFormFieldsChange(e, 'areaCode')}
                      isFullWidth
                      inputHeight='47px'
                      fontSize='20px'
                      containerStyles={{
                        marginBottom: '40px',
                      }}
                    />
                  </Box>
                  <Box>
                    <CustomTextField
                      isRequired
                      label="Teléfono"
                      value={formValues.telephone}
                      onChange={(e) => handleFormFieldsChange(e, 'telephone')}
                      isFullWidth
                      inputHeight='47px'
                      fontSize='20px'
                      containerStyles={{
                        marginBottom: '40px'
                      }}
                    />
                  </Box>
                </Box>
                <CustomTextField
                  isRequired
                  label="Consulta"
                  value={formValues.consulta}
                  onChange={(e) => handleFormFieldsChange(e, 'consulta')}
                  isFullWidth
                  inputHeight='unset'
                  fontSize='20px'
                  containerStyles={{
                    marginBottom: '40px',
                    '& .MuiInputBase-multiline': {
                      padding: '25px 0px 8px'
                    }
                  }}
                  inputStyles={{
                    paddingTop: '0px'
                  }}
                  labelStyles={{
                    bottom: '10px'
                  }}
                  multiline
                  rows={4}
                />
              </Box>
            </Grid>
          </Grid>
          <Grid container item sx={{width: '100%', justifyContent: 'center'}}>
            <Button
              id="submit-button"
              disableElevation
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 56,
                width: 259,
                borderRadius: '46px',
                backgroundColor: 'white',
                ':hover': {
                  backgroundColor: '#ffffffab'
                }
              }}
            >
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: 16,
                  color: 'black'
                }}
              >
                Enviar
              </Typography>
              <ArrowForwardIosIcon sx={{display: 'flex', justifySelf: 'flex-end', color: theme.palette.primary.syncOrange}}/>
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    )
  }
  
  export default ScheduleInterviewModal