export interface ComponentProps {
  class?: string;
  id?: string;
}

export function generateComponentClasses(baseClass: string, props: ComponentProps): string {
  const classes = [baseClass];
  
  if (props.class) {
    classes.push(props.class);
  }
  
  return classes.join(' ');
}