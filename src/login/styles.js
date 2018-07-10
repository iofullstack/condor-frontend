export const loginStyle = {
  container:{
    width: '100vw',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #8e2de2, #4a00e0)',
  },
  relative:{
    position:'relative',
    padding: '0px!important',
  }
};

export const signInStyle = {
  container:{
    height:'100vh',
  },
  paperMain:{
    backgroundColor: 'rgba(0, 0, 0, 0.78)',
    width: 350,
    borderRadius:8,
    margin: '0 auto',
    paddingTop:50,
    paddingBottom:50,
    marginTop:70,
    '@media (max-width: 500px) ':{
      width: '100%',
    }
  },
  logo:{
    display:'block',
    width:150,
    margin:'0 auto',
    marginBottom: 35,
  },
  cssLabel: {
      color: '#FFC107',
      '&$cssFocused': {
        color: '#FFEB3B',
      },
  },
  cssFocused: {
  },
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#FFEB3B',
    },
    '&:before': {
      borderBottomColor: '#3e4750',
    },
  },
  formControl:{
    display: 'block',
    position: 'relative',
    margin: '10px auto',
    width: 250,
  },
  input:{
    width: '100%',
    fontSize:16,
    backgroundColor:'#1e1e1e',
    borderRadius:2,
    color: '#fff',
    padding: 7,
  },
  icon:{
    fill: '#ffc106',
  },
  button:{
    backgroundColor:'#FFC107',
    color: '#0b0101',
    display: 'block',
    width: 200,
    margin: '30px auto',
    '&:hover':{
      backgroundColor:'#FFEB3B',
    }
  },
  mail:{
    textDecoration: 'none',
    color: '#8a9af3',
    '&:hover': {
      color: '#536bef',
    },
  },
  paper:{
    position:'relative',
    borderRadius:5,
    padding:10,
    textAlign:'center',
    backgroundColor:'#2d2d2d',
    color:'#fff',
  },
  linker:{
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 7,
  },
  iconForget:{
    verticalAlign:'middle',
    marginRight: 15,
  },
  info:{
    color:"#fff",
    margin: 15,
  }
};