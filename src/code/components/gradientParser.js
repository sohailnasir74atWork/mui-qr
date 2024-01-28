export function parseLinearGradient(linearGradient) {
    const regex = /rgba?\((\d+\.?\d*),\s?(\d+\.?\d*),\s?(\d+\.?\d*),\s?(\d*\.?\d+)\)\s+(\d*\.?\d+)%/g;
    let match;
    const colorStops = [];
  
    while ((match = regex.exec(linearGradient)) !== null) {
      const color = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${match[4]})`;
      const position = match[5] / 100; // Convert percentage to decimal
      colorStops.push({ offset: position, color });
    }
  
    return colorStops;
  }