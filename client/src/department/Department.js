import React from "react";
import { Card, Checkbox, Header, Icon, Button} from "semantic-ui-react";

const Department = ({id, name, updateItem, deleteItem}) => (
  <div style={styles.flex}>
    <div style={styles.flex}>
      <Card alignItems="center" >
      <div  className="center">
      {/* <Checkbox onClick={() => updateDepartment(id)} /> */}
        <Header as="h2" style={{ marginLeft: "15px" }}>
          {name}
        </Header>
      </div>
      </Card>
    </div>
    {/* <Button
      icon
      color="red"
      size="tiny"
      style={{ marginLeft: "15px" }}
      onClick={() => deleteDepartment(id)}
    >
      <Icon name="trash" />
    </Button> */}
  </div>
)

const styles = {
  pointer: {
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
};

export default Department;