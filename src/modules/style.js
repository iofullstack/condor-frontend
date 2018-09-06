export const listStyle = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  fabButton:{
    marginRight:15,
  },
})
export const formStyle = {
  content:{
    width:'100%',
  },
  contentCenter:{
    margin: '0 auto',
  },
  form:{
    padding: 0,
    marginTop: 30,
    backgroundColor: '#fff',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#e5e6e9 #dfe0e4 #d0d1d5",
    borderRadius: 5,
    overflow: 'hidden',
  },
  formControl:{
    display: 'block',
    position: 'relative',
    margin: '20px auto',
    width: '100%',
  },
  formContent:{
    padding: '5px 40px 40px 40px',
  },
  title:{
    margin:'25px auto',
  },
  input:{
    width:'100%',
  },
  cssLabel: {
    color: '#5c5c5c',
  },
  cssFocused: {
  },
  btnForm: {
    textAlign: 'right',
  },
  btnAdd:{
    outline: 'none!important',
    '&:hover':{
      color: '#FFF',
    },
    '&:active':{
      color: '#FFF',
    },
  },
}