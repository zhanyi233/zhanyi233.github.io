/**
 * 扁平化：将具有层级递进关系结构的 tree 数据扁平化
 * @param treeList 有层级递进关系结构的 tree 数据
 * @param flatList 用于接收扁平化结果的变量
 * @returns {*} 返回扁平化结果
 */
export const treeToFlat = (treeList, flatList = []) => {
  // flatList.length > 9999 是考虑底线保护原则，出于极限保护的目的设置的，可不设或按需设置。
  if (flatList.length > 9999) {
    return;
  }

  treeList.map((e) => {
    flatList.push(e);
    // 递归：有条件的自己调用自己，条件是 e.children.length 为真
    if (e.children && e.children.length) {
      treeToFlat(e.children, flatList);
    }
  });
  return flatList;
};

/**
 * 反扁平化：将扁平结构的 flat 数据转换为具有层级递进关系结构的 tree 数据
 * @param flatList 扁平结构的数据
 * @param treeList 用于接收反扁平化结果的变量
 * @returns {*} 返回反扁平化结果
 */
export const flatToTree = (flatList, treeList) => {
  flatList.map((e) => {
    // 以 e.pid===null,作为判断是不是根节点的依据，或者直接写死根节点（如果确定的话），
    // 具体以什么作为判断根节点的依据，得看数据的设计规则，通常是判断层级或是否代表根节点的标记
    if (e.pid === null) {
      // 避免出现重复数据
      const index = treeList.findIndex((sub) => sub.id === e.id);
      if (index === -1) {
        treeList.push(e);
      }
    }

    flatList.map((e2) => {
      if (e2.pid === e.id) {
        // 避免出现重复数据
        const index = e.children.findIndex((sub) => sub.id === e2.id);
        if (index === -1) {
          e.children.push(e2);
        }
      }
    });
  });
};
