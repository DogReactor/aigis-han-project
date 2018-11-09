import * as url from 'url';

export class Constants {
    public static get BASEHOST() { return '127.0.0.1'; }
    public static get BASEPORT() { return 3001; }
    public static GenRequestURL(pathname: string, query?: {}) {
        return url.format({
            //            protocol: 'http',
            //            hostname: this.BASEHOST,
            //            port: this.BASEPORT,
            pathname: `/api${pathname}`,
            query
        });
    }
}
