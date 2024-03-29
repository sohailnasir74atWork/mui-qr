export function parseLinearGradient(linearGradient) {
    const rgbaRegex = /rgba?\((\d+\.?\d*),\s?(\d+\.?\d*),\s?(\d+\.?\d*),?\s?(\d*\.?\d+)?\)\s+(\d*\.?\d+)%/g;
    const hexRegex = /#([a-f0-9]{6}|[a-f0-9]{3})\s+(\d*\.?\d+)%/ig;
    let match;
    const colorStops = [];
  
    while ((match = rgbaRegex.exec(linearGradient)) !== null) {
      const color = `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${match[4] ?? 1})`;
      const position = parseFloat(match[5]) / 100; // Convert percentage to decimal
      colorStops.push({ offset: position, color });
    }
  
    while ((match = hexRegex.exec(linearGradient)) !== null) {
      const color = `#${match[1]}`;
      const position = parseFloat(match[2]) / 100; // Convert percentage to decimal
      colorStops.push({ offset: position, color });
    }
  
    return colorStops;
  }
  