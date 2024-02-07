import React from "react";
import { Grid, GridItem, Card } from "./components";

const App: React.FC = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <h1>My App</h1>
      <Grid
        xs={{ col: 3, row: 2 }}
        sm={{ col: 4, row: 2 }}
        md={{ col: 6, row: 2 }}
        lg={{ col: 3, row: 2 }}
        xl={{ col: 3, row: 3 }}
      >
        <GridItem xs={{ col: 1, row: 1 }} md={{ col: 1, row: 2 }} />
        <GridItem xs={{ col: 1, row: 1 }}>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              backgroundColor: "red",
              width: "100%",
              height: "100%",
              alignItems: "center",
            }}
          >
            <p>Texto dentro do GridItem</p>
            <button>Botão dentro do GridItem</button>
          </div>
        </GridItem>
        <GridItem xs={{ col: 1, row: 1 }} md={{ col: 1, row: 2 }}>
          <div>
            <p>Outro conteúdo dentro do GridItem</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </GridItem>
        <GridItem>
          <Card>
            <p>Texto dentro do GridItem</p>
            <button>Botão dentro do GridItem</button>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
