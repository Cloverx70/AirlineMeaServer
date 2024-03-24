import { Column, Entity } from "typeorm";

@Entity("userlogin", { schema: "airlinelebanon" })
export class Userlogin {
  @Column("int", { primary: true, name: "user_id" })
  userId: number;

  @Column("varchar", { name: "username", length: 60 })
  username: string;

  @Column("varchar", { name: "email", length: 100 })
  email: string;

  @Column("varchar", { name: "password_hash", length: 200 })
  passwordHash: string;

  @Column("int", { name: "flights_booked", nullable: true })
  flightsBooked: number | null;

  @Column("int", { name: "flights_done", nullable: true })
  flightsDone: number | null;

  @Column("int", { name: "flights_canceled", nullable: true })
  flightsCanceled: number | null;

  @Column("decimal", {
    name: "total_spendings",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  totalSpendings: string | null;

  @Column("bit", { name: "isAdmin", nullable: true })
  isAdmin: boolean | null;

  @Column("decimal", {
    name: "moneyavailable",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  moneyavailable: string | null;
}
