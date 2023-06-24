try{
scaffolding;
(function(Scratch) {
console.log("ShovelUtils v1.1")
tempImageLoad = null
string = null;
temp = null;
tempVAR = null;
memoryopen = 0;
  const vm = Scratch.vm;
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/utilities.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/beta.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/files.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/runtime-options.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/CloudLinkWS.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/pointerlock.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/stretch.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/encoding.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/navigator.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/Cookie.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/cursor.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/penplus.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/cameracontrols.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/vars.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/profanity.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/discord.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/CanvasEffects.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/global-coordinate.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/Time.js");
  vm.extensionManager.loadExtensionURL("https://worldsprites.com/lib/Cast.js");
  'use strict';

  //Code from https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
const timesF = [];
let fpsF;

function refreshLoop() {
  window.requestAnimationFrame(() => {
    const now = performance.now();
    while (timesF.length > 0 && timesF[0] <= now - 1000) {
      timesF.shift();
    }
    timesF.push(now);
    fpsF = timesF.length;
    refreshLoop();
  });
}
refreshLoop()

  const times = [];
  let fps = vm.runtime.frameLoop.framerate;
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    oldStep.call(this);
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
  };
  class ShovelUtils {
    getInfo () {
      return { 
        id: 'ShovelUtils',
        name: 'ShovelUtils',
        color1: '#f54242',
        color2: '#f54242',
        color3: '#f54242',
        blocks: [{
          opcode: 'importImage',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import image from [TEXT] name [NAME]",
          arguments: {
           TEXT: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'https://packager.turbowarp.org/assets/default-icon.290e09e569a1cab8e61ba93b0d23863f.png',
           },
           NAME: {
             type: Scratch.ArgumentType.STRING,
             defaultValue: 'Apple',
           }
         }
         },
         {
          opcode: 'getlist',
          blockType: Scratch.BlockType.REPORTER,
          text: "Get list [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         {
          opcode: 'getUTime',
          blockType: Scratch.BlockType.REPORTER,
          text: "UTime",
         },
         {
          opcode: 'setlist',
          blockType: Scratch.BlockType.COMMAND,
          text: "Set list [NAME] to [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         {
          opcode: 'importSprite',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import sprite from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         {
          opcode: 'showmemory',
          blockType: Scratch.BlockType.COMMAND,
          text: "Show memory stats"
         },
         {
          opcode: 'importSound',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import sound from [TEXT] name [NAME]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/kewlab-data/char%20edit.mp3',
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Apple',
            }
         }
         },
         {
          opcode: 'importProject',
          blockType: Scratch.BlockType.COMMAND,
          text: "Import project from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/Bullet-Hell/Bullet Hell.sb3',
            }
         }
         },
         {
          opcode: 'loadExtension',
          blockType: Scratch.BlockType.COMMAND,
          text: "Load extension from [TEXT]",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://theshovel.github.io/utilities.js',
            }
         }
         },
         
         {
          opcode: 'restartProject',
          blockType: Scratch.BlockType.COMMAND,
          text: "Restart project",
          arguments: {
            TEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '0',
            }
         }
         },
         {
          opcode: 'setedtarget',
          blockType: Scratch.BlockType.COMMAND,
          text: "Set editing target to [NAME]",
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Sprite1',
            }
         }
         },
         
         {
          opcode: 'brightnessByColor',
          blockType: Scratch.BlockType.REPORTER,
          text: "Get brightness of [color]",
          arguments: {
            color: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '#ffffff',
            }
         }
         },
         

         {
          opcode: 'frameCosm',
          blockType: Scratch.BlockType.REPORTER,
          text: "[NAME][THING]",
          arguments: {
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'NAME',
            },
            THING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '',
            }
         }
         },
         {
          opcode: 'getfps',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Fps'
        },
        {
          opcode: 'getfpsF',
          blockType: Scratch.BlockType.REPORTER,
          text: 'FpsF'
        },
        {
          opcode: 'alertBlock',
          blockType: Scratch.BlockType.COMMAND,
          text: 'alert [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'A red spy is in the base!'
            }
          }
        },
        {
          opcode: 'inputPromptBlock',
          blockType: Scratch.BlockType.REPORTER,
          text: 'prompt [STRING]',
          disableMonitor: true,
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'The code is 1, 1, 1.. err... 1!'
            }
          }
        },
        {
          opcode: 'confirmationBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'confirm [STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Are you the red spy?'
            }
          }
        },
        {
          opcode: 'downloadURI',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Download [URI] name [NAME]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Test'
            },
            NAME: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Test'
            }
          }
        },
         

      ]
      }
    }


    importImage({TEXT,NAME}) {
      fetch(TEXT)
  .then((r) => r.arrayBuffer())
  .then((arrayBuffer) => {
    const storage = vm.runtime.storage;
    vm.addCostume(NAME+'.PNG', {
      name: NAME,
      asset: new storage.Asset(
        storage.AssetType.ImageBitmap,
        null, // asset id, doesn't need to be set here because of `true` at the end will make Scratch generate it for you
        storage.DataFormat.PNG,
        new Uint8Array(arrayBuffer),
        true
      )
    })
  });
  }

  frameCosm({THING,NAME}){
return THING
    }

importSprite ({TEXT}) {
  fetch(TEXT)
  .then(r => r.arrayBuffer())
  .then(buffer => vm.addSprite(buffer))
  .then(() => {
    console.log("Done");
  })
  .catch((error) => {
    console.log("Error", error);
  });
}

importSound ({TEXT,NAME}) {
fetch(TEXT)
  .then((r) => r.arrayBuffer())
  .then((arrayBuffer) => {
    const storage = vm.runtime.storage;
    const asset = new storage.Asset(
      storage.AssetType.Sound,
      null,
      storage.DataFormat.MP3,
      new Uint8Array(arrayBuffer),
      true
    );
    vm.addSound({
      md5: NAME+'.mp3',
      asset: asset,
      name: NAME
    });
  });
}

importProject ({TEXT}) {
  fetch(TEXT)
  .then(r => r.arrayBuffer())
.then(buffer => vm.loadProject(buffer))
  .then(() => {
    console.log("Done");
    vm.greenFlag()
  })
  .catch((error) => {
    console.log("Error", error);
  });
}

restartProject(){
vm.greenFlag()
}

loadExtension({TEXT}){
  vm.extensionManager.loadExtensionURL(TEXT)
}

getlist({ TEXT }) {
  const list = vm.runtime.getTargetForStage().lookupVariableByNameAndType(TEXT, 'list');
  if (list) {
    return JSON.stringify(list.value);
  } else {
    return "";
  }
}
setlist({TEXT,NAME}){
  temp = JSON.parse(TEXT)
  vm.runtime.getTargetForStage().lookupVariableByNameAndType(NAME, 'list').value = temp
}

setedtarget({NAME}){
  vm.setEditingTarget(vm.runtime.getSpriteTargetByName(NAME).id); 
}

/**
 * Calculate brightness value by RGB or HEX color.
 * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
 * @returns (Number) The brightness value (dark) 0 ... 255 (light)
 */
brightnessByColor ({color}) {
  var color = "" + color, isHEX = color.indexOf("#") == 0, isRGB = color.indexOf("rgb") == 0;
  if (isHEX) {
    const hasFullSpec = color.length == 7;
    var m = color.substr(1).match(hasFullSpec ? /(\S{2})/g : /(\S{1})/g);
    if (m) var r = parseInt(m[0] + (hasFullSpec ? '' : m[0]), 16), g = parseInt(m[1] + (hasFullSpec ? '' : m[1]), 16), b = parseInt(m[2] + (hasFullSpec ? '' : m[2]), 16);
  }
  if (isRGB) {
    var m = color.match(/(\d+){3}/g);
    if (m) var r = m[0], g = m[1], b = m[2];
  }
  if (typeof r != "undefined") return ((r*299)+(g*587)+(b*114))/1000;
}

showmemory(){
  if(memoryopen == 0){
(function(){var script=document.createElement('script');script.onload=function(){var stats=new Stats();document.body.appendChild(stats.dom);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});};script.src='https://mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);})();
memoryopen = 1;
}
}
    getfps(){
      return fps;
}

getfpsF(){
  return fpsF;
}

alertBlock(args) {
  alert(args.STRING);
}

inputPromptBlock(args) {
  return prompt(args.STRING);
}

confirmationBlock(args) {
  if (confirm(args.STRING)) {
    return true;
  } else {
    return false;
  }
}
getUTime(){
  return Date. now()
}

downloadURI({URI, NAME}) {
  const link = document.createElement("a");
  link.href = URI;
  link.download = NAME;
  link.click();
}


}


  Scratch.extensions.register(new ShovelUtils());
})(Scratch);
} catch(err) {}