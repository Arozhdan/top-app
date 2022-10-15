import { useState } from "react";
import { Button, Htag, Ptag, Tag } from "../components";

export default function Home(): JSX.Element {
  const [direction, setDirection] = useState<'down' | 'right'>('down');

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>
      <Button onClick={() => setDirection(direction === 'down' ? 'right' : 'down')} appearance="primary">Button</Button>
      <Button appearance="primary" arrow={direction} style={{ marginLeft: '10px' }}>Button</Button>
      <Button appearance="ghost" style={{ marginLeft: '10px' }}>Button</Button>
      <Button appearance="ghost" arrow={direction} style={{ marginLeft: '10px' }}>Button</Button>
      <Button appearance="ghost" arrow={direction} style={{ marginLeft: '10px' }}>Button</Button>
      <Ptag size="lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas cupiditate corrupti modi necessitatibus tempore similique amet, eaque odit cumque eos a natus ipsa et harum fugiat reiciendis maxime error!</Ptag>
      <Ptag>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas cupiditate corrupti modi necessitatibus tempore similique amet, eaque odit cumque eos a natus ipsa et harum fugiat reiciendis maxime error!</Ptag>
      <Ptag size="sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi quas cupiditate corrupti modi necessitatibus tempore similique amet, eaque odit cumque eos a natus ipsa et harum fugiat reiciendis maxime error!</Ptag>
      <Tag color="primary">New</Tag>
      <Tag color="red">New</Tag>
      <Tag color="ghost">New</Tag>
      <Tag color="grey">New</Tag>
      <Tag color="green">New</Tag>
      <br />
      <br />
      <Tag href="#" color="primary" size="md">New</Tag>
      <Tag href="#" color="red" size="md">New</Tag>
      <Tag href="#" color="ghost" size="md">New</Tag>
      <Tag href="#" color="grey" size="md">New</Tag>
      <Tag href="#" color="green" size="md">New</Tag>
    </>
  );
}
