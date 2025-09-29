document.addEventListener("DOMContentLoaded", function () {
  // Load data from Jekyll global data object injected below
  const data = window.researchGraphData;

  const nodes = data.nodes;
  const links = data.links;

  // Venue color map with low alpha for strokes
  const venueColors = {
    "NeurIPS": "rgba(47, 238, 53, 0.9)",   // purple
    "ICML": "rgba(239, 75, 108, 0.9)",      // teal
    "ICLR": "rgba(25, 108, 48, 0.9)",        // green
    "AAAI": "rgba(0, 0, 255, 0.9)",        // blue
    "UAI": "rgba(255, 165, 0, 0.9)",        // orange
    "RLC": "rgba(32, 219, 252, 0.9)",     // blue
    "PhysRev": "rgba(56, 42, 133, 0.9)",      // burgundy
    "Other": "rgba(0, 0, 0, 0.8)",      // black
    "arXiv": "rgba(187, 26, 26, 0.9)",       // red
  };


    // const legendContainer = document.getElementById("legend");
    // legendContainer.innerHTML = "<strong>Venues:</strong><br>";
    // venues.forEach(v => {
    // const color = colorMap[v] || "#999";
    // const item = document.createElement("div");
    // item.innerHTML = `<span style="display:inline-block;width:12px;height:12px;background:${color};margin-right:6px;border-radius:50%;"></span>${v}`;
    // legendContainer.appendChild(item);
    // });

  const svg = d3.select("#graph");
  const container = document.getElementById("graph-container");
  const width = container.clientWidth;
  const height = container.clientHeight;

  svg.attr("width", width).attr("height", height);

  const defs = svg.append("defs");
  defs.append("marker")
    .attr("id", "arrow")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 30) // Adjusted for better visibility
    .attr("refY", 0)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
    //   .attr("markerUnits", "userSpaceOnUse") // Important for inheriting stroke color
    .attr("orient", "auto")

    .append("path")
    .attr("d", "M1,-4L9,0L1,4")  // Slimmer, pointer-like shape: |>
    .attr("fill", "rgba(185, 185, 185, 0.95)") // Adjusted for better visibility

function edgeRepulsionForce(strength = 30, minDistance = 50) {
  return function () {
    for (let node of nodes) {
      for (let link of links) {
        const sx = link.source.x;
        const sy = link.source.y;
        const tx = link.target.x;
        const ty = link.target.y;

        const dx = tx - sx;
        const dy = ty - sy;
        const lengthSquared = dx * dx + dy * dy;
        if (lengthSquared === 0) continue;

        // Project node onto line segment
        let t = ((node.x - sx) * dx + (node.y - sy) * dy) / lengthSquared;
        t = Math.max(0, Math.min(1, t)); // Clamp to segment

        const closestX = sx + t * dx;
        const closestY = sy + t * dy;

        let distX = node.x - closestX;
        let distY = node.y - closestY;
        let distSquared = distX * distX + distY * distY;

        if (distSquared < minDistance * minDistance && distSquared > 0.01) {
          const dist = Math.sqrt(distSquared);
          const repel = (1 - dist / minDistance) * strength;

          // Normalize
          distX /= dist;
          distY /= dist;

          node.vx += distX * repel;
          node.vy += distY * repel;
        }
      }
    }
  };
}


  const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(200))
    .force("charge", d3.forceManyBody().strength(-100))  // Adjusted repulsion
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("x", d3.forceX(width / 2).strength(0.01))  // increase strength a bit from 0.1
    .force("y", d3.forceY(height / 2).strength(0.01)) // increase str
    .force("collision", d3.forceCollide().radius(50)) // Keeps nodes from overlapping too much
    .force("edgeRepulsion", edgeRepulsionForce(0.1, 0.1))
    .alphaDecay(0.02)  // slower decay to allow better settling
    .velocityDecay(0.3);  // dampen node movement for smoother layout
// const simulation = d3.forceSimulation(nodes)
//   .force("link", d3.forceLink(links)
//     .id(d => d.id)
//     .distance(250)     // more space between nodes
//     .strength(0.9))
//   .force("charge", d3.forceManyBody().strength(-200))  // less repulsion to avoid blowout
//   .force("center", d3.forceCenter(width / 2, height / 2))
//   .force("x", d3.forceX(width / 2).strength(0.2))
//   .force("y", d3.forceY(height / 2).strength(0.2))
//   .force("collision", d3.forceCollide(45))  // slightly stronger collision avoidance
//   .alphaDecay(0.02)  // slower decay to allow better settling
//   .velocityDecay(0.3);  // dampen node movement for smoother layout


  const link = svg.append("g")
    .attr("stroke", "rgba(199, 199, 199, 0.4)")
    .attr("stroke-width", 6)
    .selectAll("line")
    .data(links)
    .join("line")
    .attr("marker-end", "url(#arrow)")
    
    .on("mouseenter", (event, d) => {
    d3.select("#link-tooltip")
        .style("display", "block")
        .html(d.description);
    })
    .on("mousemove", (event) => {
    d3.select("#link-tooltip")
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 25) + "px");
    })
    .on("mouseleave", () => {
    d3.select("#link-tooltip").style("display", "none");
    });

    
  const node = svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", 20)
    .attr("fill", "rgba(199, 199, 199, 0.9)")
    .attr("stroke-width", 6)  // make stroke visible but subtle
    .attr("stroke", d => venueColors[d.venue] || "transparent")
    .style("cursor", "pointer")
    .on("mouseover", (event, d) => { // make the node a bit larger and recolor to be same as edge color:
        d3.select(event.currentTarget)

            .attr("r", 25)
            .attr("stroke", venueColors[d.venue] || "transparent")            
            .attr("fill", venueColors[d.venue] || "rgba(250, 250, 250, 1.0)");

    })

    .on("mouseout", (event, d) => {
        d3.select(event.currentTarget)
            .attr("r", 20)
            .attr("stroke-width", 6)
            .attr("stroke", venueColors[d.venue] || "transparent")
            .attr("fill", "rgba(250, 250, 250, 1.0)");
  })
.on("mouseenter", (event, d) => {
  d3.select("#node-tooltip")
    .style("display", "flex")
    .style("align-items", "stretch")
    .style("gap", "10px")
    .html(`
      <img src="${d.image}" alt="thumbnail"
        style="width: 100px; height: 100%; object-fit: cover; border-radius: 4px;">
      <div style="max-width: 600px; font-size: 14px;">
        <div style="display: inline-block;">
          <strong>${d.title}</strong>
          <div style="margin: 4px 0;">
            <svg width="160" height="6">
              <path d="M0 3 Q 10 0, 20 3 T 40 3 T 60 3 T 80 3 T 100 3 T 120 3 T 140 3 T 160 3" 
                    stroke="#999" fill="transparent" stroke-width="1.5"/>
            </svg>
          </div>
          <p style="margin: 4px 0 0 0;">${d.tldr}</p>
          </div>
      </div>
    `);
})
    .on("mousemove", (event) => {
      d3.select("#node-tooltip")
        .style("left", (event.pageX + 15) + "px")
        .style("top", (event.pageY - 35) + "px");
    })
    .on("mouseleave", () => {
      d3.select("#node-tooltip").style("display", "none");
    })
    .call(d3.drag()
  .on("start", (event, d) => {
    // Reduce charge strength while dragging
    simulation
      .force("charge", d3.forceManyBody().strength(-100))  // soften repulsion
      .alphaTarget(0.1)  // less shake
      .restart();
    d.fx = d.x;
    d.fy = d.y;
  })
  .on("drag", (event, d) => {
    d.fx = event.x;
    d.fy = event.y;
  })
  .on("end", (event, d) => {
    // Restore original charge after drag
    simulation
      .force("charge", d3.forceManyBody().strength(-200))  // original strength
      .alphaTarget(0);  // cool off
    d.fx = null;
    d.fy = null;
  })
)


  simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => {
      if (d.x < 25) {
        d.x = 25;
        d.vx = -d.vx;
      } else if (d.x > width - 25) {
        d.x = width - 25;
        d.vx = -d.vx;
      }
      return d.x;
    })
    .attr("cy", d => {
      if (d.y < 25) {
        d.y = 25;
        d.vy = -d.vy;
      } else if (d.y > height - 25) {
        d.y = height - 25;
        d.vy = -d.vy;
      }
      return d.y;
    });
});

  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    svg.attr("width", w).attr("height", h);
    simulation.force("center", d3.forceCenter(w / 2, h / 2));
    simulation.alpha(1).restart();
  });

// Create side panel
let sidePanel = document.getElementById("side-panel");
if (!sidePanel) {
  sidePanel = document.createElement("div");
  sidePanel.id = "side-panel";
  document.body.appendChild(sidePanel);
}

Object.assign(sidePanel.style, {
  position: "fixed",
  top: "0",
  right: "-400px",
  width: "360px",
  height: "100%",
  background: "#fff",
  borderLeft: "1px solid #ccc",
  boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
  overflowY: "auto",
  transition: "right 0.3s ease",
  padding: "20px",
  zIndex: "9999"
});

// Add close button
const closeBtn = document.createElement("div");
closeBtn.textContent = "×";
Object.assign(closeBtn.style, {
  position: "absolute",
  top: "10px",
  right: "15px",
  cursor: "pointer",
  fontSize: "24px",
  fontWeight: "bold"
});
closeBtn.onclick = () => {
  sidePanel.style.right = "-400px";
};
sidePanel.appendChild(closeBtn);

// Show panel on node click
node.on("click", (event, d) => {
// while clicked, make the node filled with its venue color
  d3.select(event.currentTarget)
    .attr("fill", venueColors[d.venue] || "rgba(250, 250, 250, 1.0)");
sidePanel.innerHTML = `
  <div style="position:absolute;top:10px;right:15px;cursor:pointer;font-size:24px;font-weight:bold" onclick="this.parentElement.style.right='-400px'">×</div>
  <h2 style="margin-top: 40px">${d.title}</h2>
  <p style="margin-top: 10px"><strong>Authors: </strong> ${d.authors}</p>
  <p style="margin-top: 10px"><strong>tl;dr: </strong> ${d.tldr}</p>
  ${d.link ? `<p><a href="${d.link}" target="_blank" style="color: #4285f4">View Paper ↗</a></p>` : ""}
  
  <p style="margin-top: 10px; display: flex; align-items: center; justify-content: space-between;">
    <strong>BibTeX:</strong>
    <button id="copyBibtexBtn" style="font-size: 12px; padding: 4px 8px; cursor: pointer;">Copy</button>
  </p>
  <pre id="bibtexBlock" style="background: #f9f9f9; padding: 10px; border-radius: 4px; font-size: 14px; overflow-x: auto; white-space: pre-wrap; font-family: monospace;">
${d.bibtex}
  </pre>
    <img src="${d.image}" alt="thumbnail" style="width: 100%; height: auto; border-radius: 4px; margin-top: 10px;">
`;

// Add copy functionality
document.getElementById('copyBibtexBtn').onclick = () => {
  const bibtexText = document.getElementById('bibtexBlock').innerText;
  navigator.clipboard.writeText(bibtexText).then(() => {
    alert("BibTeX copied to clipboard!");
  }).catch(() => {
    alert("Failed to copy BibTeX. Please copy manually.");
  });
};
  sidePanel.style.right = "0px";
});


 // --- Legend ---

// Create legend container (if not exists)
let legend = document.getElementById("legend");
if (!legend) {
  legend = document.createElement("div");
  legend.id = "legend";
  document.body.appendChild(legend);  // Put legend outside the graph container
}

// Base styles
legend.style.position = "fixed";
legend.style.top = "200px";
legend.style.right = "20%";
legend.style.zIndex = "999";
legend.style.background = "rgba(255,255,255,0.95)";
legend.style.border = "1px solid #ccc";
legend.style.borderRadius = "8px";
legend.style.padding = "8px 12px";
legend.style.fontSize = "14px";
legend.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)";
legend.style.userSelect = "none";
legend.style.maxWidth = "240px";
legend.style.transition = "max-height 0.3s ease, padding 0.3s ease";
legend.style.overflow = "hidden";
legend.style.maxHeight = "auto";  // Collapsed height

// // Show more on hover
// legend.addEventListener("mouseenter", () => {
//   legend.style.maxHeight = "500px";
//   legend.style.padding = "8px 12px";
// });
// legend.addEventListener("mouseleave", () => {
//   legend.style.maxHeight = "24px";
//   legend.style.padding = "4px 12px";
// });

// Clear any previous content
legend.innerHTML = "<strong>Color Codes</strong><br>";

// Add color circles and labels
for (const [venue, color] of Object.entries(venueColors)) {
  if (!nodes.some(n => n.venue === venue)) continue;
  const item = document.createElement("div");
  item.style.display = "flex";
  item.style.alignItems = "center";
  item.style.marginTop = "6px";

  const colorCircle = document.createElement("div");
  colorCircle.style.width = "14px";
  colorCircle.style.height = "14px";
  colorCircle.style.borderRadius = "50%";
  colorCircle.style.backgroundColor = color;
  colorCircle.style.marginRight = "8px";
  colorCircle.style.border = "1px solid rgba(0,0,0,0.2)";

  const label = document.createElement("span");
  label.textContent = venue;

  item.appendChild(colorCircle);
  item.appendChild(label);
  legend.appendChild(item);
}

});