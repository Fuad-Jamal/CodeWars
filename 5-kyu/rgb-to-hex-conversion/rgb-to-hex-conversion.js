function rgb(r, g, b) {
    const range = x => Math.max(0, Math.min(255,x))
    const hex = x => range(x).toString(16).padStart(2,'0').toUpperCase()
    return hex(r)+hex(g)+hex(b)
}