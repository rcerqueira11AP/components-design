import React from "react";
import PropTypes from "prop-types";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import DynamicTab from "../commons/DynamicCustomBar";
import OptionFilterLink from "../commons/OptionFilterLink";
import RecaudationTable from "./RecaudationTable"
import MorosityTable from "../Morosity/MorosityTable"

// import LinksTabs from "./LinksTabs";
require("typeface-montserrat");

const styles = {
  root: {
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "space-evenly"
  },
  paperContent: {
    padding: 16,
    //paddingBottom: 16,
    //display: "flex",
    //alignItems: "center",
    //justifyContent: "space-evenly",
    //backgroundColor: "#ffffff"
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: '#ffffff',
    boxShadow: "none"
  },
  linkContainer: {
    display: "flex",
    //paddingBottom: 16,
    alignItems: "center"
  }
};

const tabInfo = [
  {
    id: "1",
    titleText: "Diciembre",
    amountText: "$4.009.271"
  },
  {
    id: "2",
    titleText: "Enero",
    amountText: "$6.783.210"
  },
  {
    id: "3",
    titleText: "Febrero",
    amountText: "$5.892.000"
  }
];



function ManageRecaudationPage(props) {
  const { classes, idCommunity } = props;

  const [state, setState] = React.useState({
    recaudationTable: true,
  });

  const toggleLinks =(link) => {

    setState(prevState => ({
      recaudationTable: !prevState.recaudationTable
    }));

    // link === "recaudationTable" && setState({ recaudationTable : true})
    // link === "morosityTable" && setState({ morosityTable : true})
  }

  function showTable(){
    if (state.recaudationTable){
      return <RecaudationTable idCommunity={idCommunity} tableSwitcher={toggleLinks} />;
    }
    else {
      return <MorosityTable idCommunity={idCommunity} tableSwitcher={toggleLinks}/>;
    }

  }
  return (
    <div>
      Recaudado los últimos meses
      <DynamicTab boxInfos={tabInfo} />
      <br />
      <Paper elevation={0}>
        <div>
          <br />
          {showTable()}
        </div>
      </Paper>
    </div>
  );
}

ManageRecaudationPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ManageRecaudationPage);
