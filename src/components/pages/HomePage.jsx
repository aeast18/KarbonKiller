import React from 'react';
import {
    Page,
    Navbar,
    NavLeft,
    NavTitle,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
} from 'framework7-react';

var styles_col = {
  margin: '20px',
  width: '200px',
  height: '200px',
  backgroundColor: 'blue',
  display: 'inline-block',
};

export default () => (
  <Page>
    <Navbar>
      <NavTitle>Karbon Killer</NavTitle>
     </Navbar>
     <Toolbar bottom>
      <Link>Transportation</Link>
      <Link> Residence </Link>
      <Link>Diet</Link>
    </Toolbar>
    <body>
    <div class="row">
  <div class="column"> col 1</div>
  <div class="column">col 2</div>
  <div class="column">col 3</div>
</div> 
    </body>
      
</Page>   
);
