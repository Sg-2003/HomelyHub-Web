import a11a from 'mongoose';
import dns from 'dns';

const connectDB = async () => {
    try {
        try {
            dns.setServers(['8.8.8.8', '1.1.1.1']);
        } catch (dnsErr) {
            console.warn('DNS server configuration failed, relying on system defaults:', dnsErr);
        }
        await a11a['connect'](process['env']['MONGO_URI']), console['log']('Mongodb\x20connected...');
    } catch (a) {
        console['error']('Mongodv\x20connection\x20failed', a), process['exit'](0x1);
    }
};
export default connectDB;