/*
Clone Master by Kate Miller (github: katekaho)

Allows users to create a clone of component instances under a new master

Usage: Select the existing component instances of a master component and run the plugin
This will create a new master component with the instances you selected attached to it

To-do:

Test each shape
Think about how to make UI easy to use and understand

*/

/*-----------------------------------------------------------------------------
NODE COPYING FUNCTIONS
-------------------------------------------------------------------------------
The following are helper functions that copy different Node types needed for  
this plugin from the original instances
-----------------------------------------------------------------------------*/

function copyFrameNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  // copy['backgrounds'] = original['backgrounds'];
  copy['backgroundStyleId'] = original['backgroundStyleId'];
  copy['blendMode'] = original['blendMode'];
  copy['clipsContent'] = original['clipsContent'];
  copy['constraints'] = original['constraints'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects'];
  copy['exportSettings'] = original['exportSettings'];
  copy['gridStyleId'] = original['gridStyleId'];
  copy['guides'] = original['guides'];
  copy['layoutGrids'] = original['layoutGrids'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  copy['parent'] = original['parent'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];

  // Copy each child
  let currentChild = 0;
  original['children'].forEach(childNode => {
    copyNodesBasedOnType(copy['children'][currentChild++], childNode);
  });
}

function copyVectorNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['blendMode'] = original['blendMode'];
  copy['constraints'] = original['constraints'];
  copy['cornerRadius'] = original['cornerRadius'];
  copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects']; 
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  copy['handleMirroring'] = original['handleMirroring'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['vectorNetwork'] = original['vectorNetwork'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];

}

function copyBooleanOperationNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['backgrounds'] = original['backgrounds'];
  copy['blendMode'] = original['blendMode'];
  copy['booleanOperation'] = original['booleanOperation'];
  copy['constraints'] = original['constraints'];
  // copy['cornerRadius'] = original['cornerRadius'];
  // copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects']; 
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];

  // Copy each child
  let currentChild = 0;
  original['children'].forEach(childNode => {
    copyNodesBasedOnType(copy['children'][currentChild++], childNode);
  });
  return;
}

function copyStarNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['blendMode'] = original['blendMode'];
  copy['constraints'] = original['constraints'];
  copy['cornerRadius'] = original['cornerRadius'];
  copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects'];
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['innerRadius'] = original['innerRadius'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['pointCount'] = original['pointCount'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
}

function copyLineNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
copy['blendMode'] = original['blendMode'];
copy['constraints'] = original['constraints'];
copy['dashPattern'] = original['dashPattern'];
copy['effectStyleId'] = original['effectStyleId'];
copy['effects'] = original['effects'];
copy['exportSettings'] = original['exportSettings'];
copy['fillStyleId'] = original['fillStyleId'];
copy['fills'] = original['fills'];
// copy['height'] = original['height'];
// copy['isMask'] = original['isMask'];
copy['locked'] = original['locked'];
copy['name'] = original['name'];
copy['opacity'] = original['opacity'];
// copy['relativeTransform'] = original['relativeTransform'];
// copy['removed'] = original['removed'];
// copy['rotation'] = original['rotation'];
copy['strokeAlign'] = original['strokeAlign'];
copy['strokeCap'] = original['strokeCap'];
copy['strokeJoin'] = original['strokeJoin'];
copy['strokeStyleId'] = original['strokeStyleId'];
copy['strokeWeight'] = original['strokeWeight'];
copy['strokes'] = original['strokes'];
// copy['type'] = original['type'];
copy['visible'] = original['visible'];
// copy['width'] = original['width'];
// copy['x'] = original['x'];
// copy['y'] = original['y'];
}

function copyEllipseNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  // copy['arcData'] = original['arcData'];
  copy['blendMode'] = original['blendMode'];
  copy['constraints'] = original['constraints'];
  // copy['cornerRadius'] = original['cornerRadius'];
  // copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects']; 
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
}

function copyPolygonNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['blendMode'] = original['blendMode'];
  copy['constraints'] = original['constraints'];
  // copy['cornerRadius'] = original['cornerRadius'];
  // copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects']; 
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
}

function copyRectangleNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  // copy['backgrounds'] = original['backgrounds'];
  copy['blendMode'] = original['blendMode'];
  // copy['bottomLeftRadius'] = original['bottomLeftRadius'];
  // copy['bottomRightRadius'] = original['bottomRightRadius'];
  copy['constraints'] = original['constraints'];
  // copy['cornerRadius'] = original['cornerRadius'];
  // copy['cornerSmoothing'] = original['cornerSmoothing'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects']; 
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
  return;
}

function copyTextNode(copy, original) {
  // Doesn't support Advanced Type Features, Numbers

  // Load original and new font then modify once complete
  Promise.all([figma.loadFontAsync(copy['fontName']), figma.loadFontAsync(original['fontName'])])
  .then(() => {
      copy['characters'] = original['characters'];
      copy['fontName'] = original['fontName'];
      copy['fontSize'] = original['fontSize'];
      copy['letterSpacing'] = original['letterSpacing'];
      copy['lineHeight'] = original['lineHeight'];
      copy['paragraphIndent'] = original['paragraphIndent'];
      copy['paragraphSpacing'] = original['paragraphSpacing'];
      copy['textAlignHorizontal'] = original['textAlignHorizontal'];
      copy['textAlignVertical'] = original['textAlignVertical'];
      copy['textAutoResize'] = original['textAutoResize'];
      copy['textCase'] = original['textCase'];
      copy['textDecoration'] = original['textDecoration'];
      copy['textStyleId'] = original['textStyleId'];
  }).catch((err) => {
    console.error("Clone plugin error: function copyTextNode() error: promise failed");
    console.error(err)
  });

  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['autoRename'] = original['autoRename'];
  copy['blendMode'] = original['blendMode'];
  copy['constraints'] = original['constraints'];
  copy['dashPattern'] = original['dashPattern'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects'];
  copy['exportSettings'] = original['exportSettings'];
  copy['fillStyleId'] = original['fillStyleId'];
  copy['fills'] = original['fills'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['parent'] = original['parent'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['strokeAlign'] = original['strokeAlign'];
  copy['strokeCap'] = original['strokeCap'];
  copy['strokeJoin'] = original['strokeJoin'];
  copy['strokeStyleId'] = original['strokeStyleId'];
  copy['strokeWeight'] = original['strokeWeight'];
  copy['strokes'] = original['strokes'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
  return;
}

function copySliceNode(copy, original) {
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['constraints'] = original['constraints'];
  copy['exportSettings'] = original['exportSettings'];
  // copy['height'] = original['height'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  // copy['relativeTransform'] = original['relativeTransform'];
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
  return;
}
 
function copyInstanceNode(copy, original) {

  console.log(original);
  // copy['absoluteTransform'] = original['absoluteTransform'];
  copy['backgroundStyleId'] = original['backgroundStyleId'];
  copy['backgrounds'] = original['backgrounds'];
  copy['blendMode'] = original['blendMode'];
  copy['clipsContent'] = original['clipsContent'];
  copy['effectStyleId'] = original['effectStyleId'];
  copy['effects'] = original['effects'];
  copy['exportSettings'] = original['exportSettings'];
  copy['gridStyleId'] = original['gridStyleId'];
  copy['guides'] = original['guides'];
  // copy['height'] = original['height'];
  // copy['isMask'] = original['isMask'];
  copy['layoutGrids'] = original['layoutGrids'];
  copy['locked'] = original['locked'];
  copy['name'] = original['name'];
  copy['opacity'] = original['opacity'];
  // copy['parent'] = original['parent'];
  // copy['relativeTransform'] = original['relativeTransform']; // This varies by base or child
  // copy['removed'] = original['removed'];
  // copy['rotation'] = original['rotation'];
  // copy['type'] = original['type'];
  copy['visible'] = original['visible'];
  // copy['width'] = original['width'];
  // copy['x'] = original['x'];
  // copy['y'] = original['y'];
  // Copy each child
  let currentChild = 0;
  original['children'].forEach(childNode => {
    copyNodesBasedOnType(copy['children'][currentChild++], childNode);
  });
  return;
}

/*-----------------------------------------------------------------------------
END OF NODE COPYING FUNCTIONS
-----------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------
OTHER HELPER FUNCTIONS
-----------------------------------------------------------------------------*/

// Has to be child instances and/or the parent of the intstances
function verifyUserInput(currentPageSelection: PageNode['selection']) {
  let originalMasterComponent: ComponentNode;
  let currentInstanceNode: InstanceNode;
  let masterComponentFound: Boolean = false;
  let masterComponentInSelection: Boolean = false;

  // If nothing selected, exit
  if (currentPageSelection.length < 1) {
    return 'Nothing selected';
  }


  // Find the master component, if it has been selected
  for (const currentNode of currentPageSelection) {
    if (currentNode.type == 'COMPONENT') {
      if(masterComponentFound) {
        return 'Selected more than one master component';
      }
      masterComponentFound = true;
      masterComponentInSelection = true;
      originalMasterComponent = currentNode;
    }
  }

  if (currentPageSelection.length == 1 && masterComponentFound) {
    return 'Master component found but no component instances were selected';
  }

  // Verify user selection of component instances under same master
  for (const currentNode of currentPageSelection) {

    // Ensure that the each node is of type instance, exit if not
    if (currentNode.type != 'INSTANCE') {
      if(masterComponentInSelection) {
        return 'Selected items are not all instances of the selected master component'
      } else {
        return 'Selected items are not all instances of a master component'
      }
    }

    // Specify the node type so no other errors occur
    currentInstanceNode = currentNode;


    // Ensure that each selected element has the same master
    if (originalMasterComponent == null) {
      // Sets the master component on the first loop
      if (!masterComponentFound) {
        originalMasterComponent = currentInstanceNode.masterComponent;
        masterComponentFound = true;
      } else {
        return 'Unable to find a master component, please modify your selection';
      }
    } else {
      // Check that nodes have the same master
      if (originalMasterComponent !== currentInstanceNode.masterComponent) {
        return 'Selected items are instances of different master components';
      }
    }
  }
}

function copyNodesBasedOnType(copy: BaseNode, original: BaseNode) {
  console.log(original.type);
  switch (original.type) {
    case 'SLICE':
      copySliceNode(copy, original);
      break;
    case 'FRAME':
    case 'GROUP':
      copyFrameNode(copy, original);
      break;
    case 'INSTANCE':
      copyInstanceNode(copy, original);
      break;
    case 'BOOLEAN_OPERATION':
      copyBooleanOperationNode(copy, original);
      break;
    case 'VECTOR':
      copyVectorNode(copy, original);
      break;
    case 'STAR':
      copyStarNode(copy, original);
      break;
    case 'LINE':
      copyLineNode(copy, original);
      break;
    case 'ELLIPSE':
      copyEllipseNode(copy, original);
      break;
    case 'POLYGON':
      copyPolygonNode(copy, original);
      break;
    case 'RECTANGLE':
      copyRectangleNode(copy, original);
      break;
    case 'TEXT':
      copyTextNode(copy, original);
      break;
    default:
      console.error('Some other node type, need to add functionality');
  }
}

/*-----------------------------------------------------------------------------
END OF EXTRA HELPER FUNCTIONS
-----------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------
MAIN PLUGIN FUNCTION
-----------------------------------------------------------------------------*/

function main() {
  let originalMasterComponent: ComponentNode; // Master component to clone
  let newMasterComponent: ComponentNode; // Copy of the original master component
  let newInstanceNodes: BaseNode[] = []; // Holds all newly cloned child instances 
  let masterAssigned = false;

  // Verifies that users selected the right thing, returns an error msg if incorrect input
  let errorMsg = verifyUserInput(figma.currentPage.selection);

  if(typeof errorMsg !== 'undefined') {
    console.log(errorMsg);
    figma.showUI(__html__);
    figma.ui.postMessage({type: 'inputError', message: errorMsg});
  } else {
    // have to restructure to take out the master component

    // Loops through each selected instance and copies data
    for (const node of figma.currentPage.selection) {

      // If haven't found the master component yet, assign it and clone
      if (!masterAssigned) {
        if (node.type == 'COMPONENT') { // If master component is first selected, clone it
          newMasterComponent = originalMasterComponent.clone();
        } else { // Clone the first instance it finds
          newMasterComponent = node.masterComponent.clone();
        }
        masterAssigned = true;
      }

      if (node.type == 'INSTANCE') {
        // Make a new instance of the original node where the copied data will lay
        let originalInstanceNode: InstanceNode = node; // Suppress some type errors
        let instanceNodeCopy: InstanceNode = originalInstanceNode.clone();

        // Set the master of the new instance to the newly created one
        instanceNodeCopy.masterComponent = newMasterComponent;

        // Copies all the original data of the node into the new one
        copyNodesBasedOnType(instanceNodeCopy, originalInstanceNode);

        // Add it to our array so we can select it by default later
        newInstanceNodes.push(instanceNodeCopy);

      }

    }
    // Automatically selects the newly created master and child nodes
    // FUTURE: Move the master near the child nodes by default
    figma.currentPage.selection = [newMasterComponent, ...newInstanceNodes];

    figma.closePlugin();
}


}

/*-----------------------------------------------------------------------------
END OF MAIN PLUGIN FUNCTION
-----------------------------------------------------------------------------*/

// main();

// setInterval(function() {
//   let currentPageSelection = figma.currentPage.selection;
//   console.log(currentPageSelection);
//   let error = verifyUserInput(currentPageSelection);
//   console.log(error);

// }, 2000);

figma.showUI(__html__);