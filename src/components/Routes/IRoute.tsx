export default interface IRoute {
  path?: string,
  title?: string,
  sub_route?: IRoute[]
}