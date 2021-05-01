import React from "react";
import Header from "./Header";
import Die from "./Die";
import Result from "./Result";

export default class DiceRollerApp extends React.Component {
  state = {
    currentValue: undefined,
    drawerOpen: false,
    lastDieRolled: undefined,
    lastResult: undefined,
    refreshKey: 0,
  };

  handleOpenDrawer = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  handleRollDie = (dieType, result) => {
    this.setState(() => ({
      lastDieRolled: dieType,
      lastResult: result,
    }));
  };

  updateRefreshKey = (newKey) => {
    this.setState(() => ({
      refreshKey: newKey,
    }));
  };

  render() {
    return (
      <div>
        <Header
          drawerOpen={this.state.drawerOpen}
          handleOpenDrawer={this.handleOpenDrawer}
        />
        <Result
          lastDieRolled={this.state.lastDieRolled}
          lastResult={this.state.lastResult}
          refreshKey={this.state.refreshKey}
        />
        <div className="dice-container">
          <Die
            dieType={20}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
          <Die
            dieType={12}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
          <Die
            dieType={10}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
          <Die
            dieType={8}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
          <Die
            dieType={6}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
          <Die
            dieType={4}
            handleRollDie={this.handleRollDie}
            updateRefreshKey={this.updateRefreshKey}
            refreshKey={this.state.refreshKey}
          />
        </div>
      </div>
    );
  }
}
