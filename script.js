// ---------- Typewriter hero ----------
const NAME = "Harsha Ram K";
const typeTarget = document.getElementById('typeName');
let i = 0;
function typeChar() {
  if (i <= NAME.length) {
    typeTarget.textContent = NAME.slice(0, i);
    i++;
    setTimeout(typeChar, 90);
  }
}
typeChar();
 
// ---------- Chessboard build ----------
const board = document.getElementById('chessboard');
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const sq = document.createElement('div');
    sq.className = (row + col) % 2 === 0 ? 'square-light' : 'square-dark';
    board.appendChild(sq);
  }
}
 
// Knight's tour skill path — [col, row] with row 0 at top, 7 at bottom
// Starts on b1 — a knight's actual home square — then every hop below
// is a legal knight move (±1,±2) or (±2,±1).
const tour = [
  { col: 1, row: 7, label: 'Python Foundations (b1)', type: 'done' },
  { col: 3, row: 6, label: 'HTML, CSS & JavaScript (d2)', type: 'done' },
  { col: 2, row: 4, label: 'Django & OOP (c4)', type: 'done' },
  { col: 4, row: 3, label: 'Oracle SQL & RDBMS (e5)', type: 'done' },
  { col: 3, row: 1, label: 'React.js & REST APIs (d7)', type: 'done' },
  { col: 5, row: 0, label: 'PySpiders Full Stack Training (f8)', type: 'done' },
  { col: 7, row: 1, label: 'Software Developer — Goal (h7)', type: 'goal' },
];
 
const nodesLayer = document.getElementById('boardNodes');
const legend = document.getElementById('boardLegend');
 
tour.forEach((node, idx) => {
  const x = ((node.col + 0.5) / 8) * 100;
  const y = ((node.row + 0.5) / 8) * 100;
 
  const el = document.createElement('div');
  el.className = 'board-node' + (node.type === 'learning' ? ' learning' : node.type === 'goal' ? ' goal' : '');
  el.style.left = x + '%';
  el.style.top = y + '%';
  el.setAttribute('data-label', node.label);
  el.textContent = idx + 1;
  nodesLayer.appendChild(el);
 
  const li = document.createElement('div');
  li.className = 'legend-item' + (node.type === 'learning' ? ' learning' : node.type === 'goal' ? ' goal' : '');
  li.innerHTML = `<span class="legend-num">${idx + 1}</span><span>${node.label}</span>`;
  legend.appendChild(li);
});
 
// ---------- Scroll reveal for board ----------
const boardSection = document.getElementById('board');
const path = document.getElementById('tourPath');
const nodeEls = document.querySelectorAll('.board-node');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      path.classList.add('reveal');
      nodeEls.forEach((n, idx) => {
        setTimeout(() => n.classList.add('show'), 300 + idx * 220);
      });
      observer.disconnect();
    }
  });
}, { threshold: 0.35 });
 
observer.observe(boardSection);
 
// ---------- Tech stack ----------
const stack = [
  { cat: 'Programming Language', items: ['Python'] },
  { cat: 'Frontend', items: ['HTML', 'CSS', 'JavaScript','Bootstrap', 'React.js'] },
  { cat: 'Backend', items: ['Django'] },
  { cat: 'Database', items: ['MySQL'] },
  { cat: 'Database', items: ['Oracle SQL'] },
  { cat: 'Tooling', items: ['GitHub'] },
  { cat: 'Tooling', items: ['REST APIs'] },
  { cat: 'Platform', items: [ 'VS Code'] },
];
 
const stackGrid = document.getElementById('stackGrid');
stack.forEach((group) => {
  group.items.forEach((item) => {
    const [name, status] = item.split('|');
    const cell = document.createElement('div');
    cell.className = 'stack-item' + (status === 'learning' ? ' in-progress' : '');
    cell.innerHTML = `<span class="stack-cat mono">${group.cat}</span><span class="stack-name">${name}</span>`;
    stackGrid.appendChild(cell);
  });
});
 
// ---------- Nav background on scroll ----------
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(232,230,223,0.14)' : 'rgba(232,230,223,0.09)';
});

