const glob = require('glob');

const docsSidebarContents = [...glob.sync('docs/*/*.md')
  .map(path => path.match(/^docs\/day(\d+)\/(\d+)\.md$/))
  .reduce(
    (map, [, day, itemNumberInDay]) =>
      map.set(day, [...(map.get(day) || []), itemNumberInDay]),
    new Map(),
  )
  .entries()]
  .sort(([day1], [day2]) => parseInt(day1, 10) - parseInt(day2, 10))
  .map(([day, itemNumbers]) => ({
    type: 'category',
    label: `${day}日目`,
    items: itemNumbers.sort().map(itemNumber => `day${day}/${itemNumber}`),
  }));

const docsSidebar = [
  'index',
  ...docsSidebarContents,
];

module.exports = {
  docsSidebar
};
