const glob = require('glob');

const docsSidebar = [...glob.sync('docs/*/*.md')
  .map(path => path.match(/^docs\/day(\d+)\/(\d+)\.md$/))
  .reduce(
    (map, [, day, itemNumberInDay]) =>
      map.set(day, [...(map.get(day) || []), itemNumberInDay]),
    new Map()
  )
  .entries()]
  .sort(([day]) => day)
  .map(([day, itemNumbers]) => ({
    type: 'category',
    label: `${day}日目`,
    items: itemNumbers.sort().map(itemNumber => `day${day}/${itemNumber}`)
  }));

module.exports = {
  docsSidebar
};
