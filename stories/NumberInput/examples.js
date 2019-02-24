export const standard = `
<Layout>
  <Cell>
    <NumberInput />
  </Cell>
  <Cell>
    <NumberInput forceHover />
  </Cell>
  <Cell>
    <NumberInput forceFocus />
  </Cell>
</Layout>
`;

export const error = `
<Layout>
  <Cell>
    <NumberInput status={'error'}/>
  </Cell>
  <Cell>
    <NumberInput status={'error'} forceHover />
  </Cell>
  <Cell>
    <NumberInput status={'error'} forceFocus />
  </Cell>
</Layout>
`;

export const loader = `
<Layout>
  <Cell>
    <NumberInput status="loading" />
  </Cell>
  <Cell>
    <NumberInput status="loading" statusMessage="Loading some data..." />
  </Cell>
</Layout>
`;

export const affix = `
<Layout>
  <Cell>
    <NumberInput prefix={<Input.Affix>https://</Input.Affix>} />
  </Cell>
  <Cell>
    <NumberInput suffix={<Input.Affix>$</Input.Affix>} />
  </Cell>
  <Cell>
    <NumberInput
      prefix={<Input.Affix>https://</Input.Affix>}
      suffix={<Input.Affix>.com</Input.Affix>}
    />
  </Cell>
  <Cell>
    <NumberInput
      prefix={<Input.Affix>@</Input.Affix>}
      suffix={<Input.Affix>$</Input.Affix>}
      status="error"
    />
  </Cell>
</Layout>
`;

export const iconAffix = `
<Layout>
  <Cell>
    <NumberInput
      prefix={
        <Input.IconAffix>
          <Date />
        </Input.IconAffix>
      }
    />
  </Cell>
  <Cell>
    <NumberInput
      suffix={
        <Input.IconAffix>
          <Search />
        </Input.IconAffix>
      }
    />
  </Cell>
  <Cell>
    <NumberInput
      prefix={
        <Input.IconAffix>
          <Date />
        </Input.IconAffix>
      }
      suffix={
        <Input.IconAffix>
          <Search />
        </Input.IconAffix>
      }
    />
  </Cell>
  <Cell>
    <NumberInput
      prefix={
        <Input.IconAffix>
          <Date />
        </Input.IconAffix>
      }
      suffix={
        <Input.IconAffix>
          <Search />
        </Input.IconAffix>
      }
      status="error"
    />
  </Cell>
</Layout>
`;

export const sizes = `
<Layout>
  <Cell>
    <NumberInput
      size="small"
      placeholder="They did not know it was impossible, so they did it!"
    />
  </Cell>
  <Cell>
    <NumberInput
      size="normal"
      placeholder="They did not know it was impossible, so they did it!"
    />
  </Cell>
  <Cell>
    <NumberInput
      size="large"
      placeholder="They did not know it was impossible, so they did it!"
    />
  </Cell>
</Layout>
`;

export const rounded = `
<Layout>
  <Cell>
    <NumberInput
      size="small"
      placeholder="They did not know it was impossible, so they did it!"
      roundInput />
  </Cell>
  <Cell>
    <NumberInput
      size="normal"
      placeholder="They did not know it was impossible, so they did it!"
      roundInput
    />
  </Cell>
  <Cell>
    <NumberInput
      size="large"
      placeholder="They did not know it was impossible, so they did it!"
      roundInput
    />
  </Cell>
</Layout>`;
