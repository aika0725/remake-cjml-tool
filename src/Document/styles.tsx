import { makeStyles } from '@material-ui/core/styles'

export const fontStyles = makeStyles({
  bold: {
    fontWeight: 500,
  },
  title: {
    fontSize: 48,
    fontWeight: 500,
  },
  subTitle: {
    fontSize: 36,
    fontWeight: 500,
    marginTop: 42,
  },
  thirdTitle: {
    fontSize: 32,
    fontWeight: 400,
    marginTop: 40,
  },
})

// const Demo = () => {
//   const classes = useStyles();
//   return (
//     <Typography className={classes.bold}>
//       CSS in JS
//     </Typography>
//   )
// }
