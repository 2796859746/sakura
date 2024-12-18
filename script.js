// 切换模块函数
function switchModule(module) {
    // 隐藏所有模块
    const modules = document.querySelectorAll('.module');
    modules.forEach(mod => mod.classList.remove('active'));

    // 显示选中的模块
    document.getElementById(module).classList.add('active');
}
//药材价格表
const herbPricesData = {
    //生息药材
    "all": {
        "火精枣": 1500000,
        "地黄参": 1500000,
        "宁心草": 1500000,
        "凝血草": 1500000,
        "红绫草": 2000000,
        "恒心草": 2000000,
        "罗犀草": 1800000,
        "天青花": 1800000,
        "银月花": 1000000,
        "宁神花": 1000000,
        "剑芦": 1000000,
        "七星草": 1000000,
        "五柳根": 2400000,
        "天元果": 2400000,
        "流莹草": 2000000,
        "蛇涎果": 2000000,
        "风灵花": 1800000,
        "伏龙参": 1800000,
        "何首乌": 2400000,
        "夜交藤": 2400000,
        "夏枯草": 1800000,
        "百草露": 1800000,
        "凌风花": 1800000,
        "补天芝": 1800000,
        "紫猴花": 2800000,
        "九叶芝": 2800000,
        "幻心草": 2800000,
        "鬼臼草": 2800000,
		"轻灵草": 2200000,
		"龙葵": 2200000,
		"弗兰草": 2200000,
		"玄参": 2200000,
		"枫香脂": 2200000,
		"炼魂珠": 2200000,
		"玄冰花": 2200000,
		"炼血珠": 2200000,
        "血莲精": 3000000,
        "鸡冠草": 3000000,
        "银精芝": 3000000,
        "玉髓芝": 3000000,
		"菩提花": 0,
		"乌稠木": 0,
		"雪凝花": 2400000,
		"龙纹草": 2400000,
		"石龙芮": 2400000,
		"锦地罗": 2400000,
		"冰灵果": 2600000,
		"玉龙参": 2600000,
        "地心火芝": 3700000,
        "天蝉灵叶": 3700000,
        "雪玉骨参": 3700000,
        "腐骨灵花": 3700000,
		"天灵果": 0,
		"灯心草": 0,
		"穿心莲": 3000000,
		"龙鳞果": 3000000,
		"伴妖草": 3200000,
		"剑心竹": 3200000,
		"绝魂草": 3200000,
		"月灵花": 3200000,
        "三叶青芝": 4100000,
        "七彩月兰": 4100000,
        "三尾风叶": 4100000,
        "冰灵焰草": 4100000,
		"白沉脂": 0,
		"苦曼藤": 0,
		"血菩提": 3200000,
		"诱妖草": 3200000,
		"混元果": 3600000,
		"皇龙花": 3600000,
		"天剑笋": 3600000,
		"黑天麻": 3600000,
        "地心淬灵乳": 4500000,
        "天麻翡石精": 4500000,
        "八角玄冰草": 4500000,
        "奇茸通天菊": 4500000,
		"天问花": 3800000,
		"渊血冥花": 0,
		"芒焰果": 3800000,
		"问道花": 3800000,
		"血玉竹": 4000000,
		"肠蚀草": 4000000,
		"凤血果": 4000000,
		"冰精芝": 4000000,
        "檀芒九叶花": 5000000,
        "坎水玄冰果": 5000000,
		"木灵三针花": 6500000,
		"鎏鑫天晶草": 6500000,
		"阴阳黄泉花": 4400000,
		"厉魂血珀": 4400000,
		"浩淼水藤": 4400000,
		"道蕴花": 4400000,
		"狼桃": 4400000,
		"霸王花": 4400000,
		"太清玄灵草": 4400000,
		"冥胎骨": 4400000,
        "剑魄竹笋": 5400000,
        "明心问道果": 5400000,
		"离火梧桐芝": 10000000,
		"尘磊岩麟果": 10000000,
		"太乙碧莹花": 4800000,
		"森檀木": 4800000,
		"炼心芝": 4800000,
		"重元换血草": 4800000,
		"地龙干": 4800000,
		"龙须藤": 4800000,
		"鬼面花": 4800000,
		"梧桐木": 4800000		
    },
    
};

// 提取药材信息
function extractInfo(text) {
    //提取药材价格
    function extractHerbPrices(text) {
        const herbPrices = [];
        const namePattern = /> ([^]+?)(?=\s+|$)/g;
        const quantityPattern = /(\d+)/g;

        let nameMatch;
        let quantityMatch;

        // 遍历提取药材信息
        while ((nameMatch = namePattern.exec(text)) !== null && (quantityMatch = quantityPattern.exec(text)) !== null) {
            const herbName = nameMatch[1];
            const quantity = parseInt(quantityMatch[1]);
			console.log(nameMatch[1])

            // 查找药材价格
            let price = 0;
            let found = false;

            // 首先检查特殊药材
            // if (herbPricesData.all[herbName]) {
            //     price = herbPricesData.specialHerbs[herbName];
            //     found = true;
            // }

            // 如果没有找到，再检查生息药材
            if (!found && herbPricesData.all[herbName]) {
                price = herbPricesData.all[herbName];
                found = true;
            }

            // // 如果没有找到，再检查非生息药材
            // if (!found && herbPricesData.nonShengxi[herbName]) {
            //     price = herbPricesData.nonShengxi[herbName];
            //     found = true;
            // }

            // 如果找到了价格，创建 HerbPrice 对象并加入到列表
            if (found) {
                herbPrices.push(new HerbPrice(herbName, price, quantity));
            } else {
                // 如果找不到价格，标记为0
                herbPrices.push(new HerbPrice(herbName, 0, quantity));
            }
        }

        herbPrices.sort((a, b) => b.price - a.price);
        let result = '';
        for (const herbPrice of herbPrices) {
			if(herbPrice.price!=0){
				const priceText = `坊市上架 ${herbPrice.name} ${herbPrice.price} ${herbPrice.quantity}`;
				result += `
				    <div class="item">
				        <span>${priceText}</span>
				        <button class="copy-button" data-text="${priceText}">复制</button>
				    </div>
				    `;
			}
            
        }
        return result;
    }

    class HerbPrice {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    document.getElementById('herb-info').innerHTML = extractHerbPrices(text);
    //复制按钮逻辑
    document.querySelectorAll('.copy-button').forEach(button => {
        button.addEventListener('click', function () {
            const textToCopy = this.getAttribute('data-text');
            copyToClipboard(textToCopy);
            showNotification('复制成功');
        });
    });
}

// 计算药材背包总价值
function calculateTotalValue() {
    const inputText = document.getElementById('herbValueInput').value;
    const regex = /([\u4e00-\u9fa5]{2,5})\s+\S+\s+数量:\s*(\d+)/g;
    let totalValue = 0;

    // 遍历所有匹配的药材名称和数量
    let match;
    while ((match = regex.exec(inputText)) !== null) {
        const herbName = match[1]; // 药材名称
        const quantity = parseInt(match[2]); // 数量

        let foundPrice = 0;

        // 查找该药材的价格
        foundPrice = findHerbPrice(herbName);
        if (foundPrice) {
            totalValue += foundPrice * quantity; // 累加总价值
        }
    }

    // 格式化总价值
    const formattedValue = formatCurrency(totalValue);
    document.getElementById('result').textContent = `药材背包总价值: ${formattedValue}`;
}

// 查找药材价格
function findHerbPrice(herbName) {
    // 遍历所有药材类别，查找对应的价格
    for (let category in herbPricesData) {
        if (herbPricesData[category].hasOwnProperty(herbName)) {
            return herbPricesData[category][herbName];
        }
    }
    // 如果找不到药材价格，返回 0
    return 0;
}

// 格式化数字为“亿”和“万”格式
function formatCurrency(value) {
    if (value >= 100000000) {
        return `${(value / 100000000).toFixed(2)} 亿`;
    } else if (value >= 10000) {
        return `${(value / 10000).toFixed(2)} 万`;
    } else {
        return `${value} 灵石`;
    }
}

// 将内容复制到剪切板
function copyToClipboard(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}

// 提示信息
function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// 提示信息
function showNotification(message) {
    let notification = document.getElementById('notification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'notification';
        document.body.appendChild(notification);
    }
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 2000);
}

// 粘贴按钮逻辑
document.getElementById('paste-button1').addEventListener('click', () => {
    navigator.clipboard.readText()
        .then(text => {
            // 处理粘贴内容，移除所有'-'字符
            document.getElementById('user-input').value = text.replace(/-/g, '');
        })
        .catch(err => {
            console.error('无法从剪贴板读取内容: ', err);
        });
});

document.getElementById('paste-button2').addEventListener('click', () => {
    navigator.clipboard.readText()
        .then(text => {
            // 处理粘贴内容，移除所有'-'字符
            document.getElementById('herbValueInput').value = text.replace(/-/g, '');
        })
        .catch(err => {
            console.error('无法从剪贴板读取内容：', err);
        });
});

// 提取按钮逻辑
document.getElementById('process-button').addEventListener('click', function () {
    const userInputText = document.getElementById('user-input').value;
    extractInfo(userInputText);
});

// 清空按钮逻辑
document.getElementById('clear-button1').addEventListener('click', function () {
    document.getElementById('user-input').value = '';
    document.getElementById('herb-info').innerHTML = '';
    document.getElementById('alchemy-info').innerHTML = '';
});

document.getElementById('clear-button2').addEventListener('click', function () {
    document.getElementById('herbValueInput').value = '';
    document.getElementById('result').textContent = '总价值: 0 灵石';
});

// 禁止输入'-'字符
document.getElementById('user-input').addEventListener('input', function (event) {
    let userInputText = event.target.value;

    // 检查是否包含 '-' 字符
    if (userInputText.includes('-')) {
        // 如果有'-'字符，去掉它
        event.target.value = userInputText.replace(/-/g, ''); // 替换掉所有的 '-' 字符
    }
});

// 禁止输入'-'字符
document.getElementById('herbValueInput').addEventListener('input', function (event) {
    let userInputText = event.target.value;

    // 检查是否包含 '-' 字符
    if (userInputText.includes('-')) {
        // 如果有'-'字符，去掉它
        event.target.value = userInputText.replace(/-/g, ''); // 替换掉所有的 '-' 字符
    }
});
